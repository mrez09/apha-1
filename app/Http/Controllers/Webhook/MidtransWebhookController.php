<?php

namespace App\Http\Controllers\Webhook;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Invoice;
use App\Models\Payment;
use Illuminate\Support\Facades\Log;

class MidtransWebhookController extends Controller
{
    public function handle(Request $request)
    {
        Log::info('Webhook diterima dari Midtrans', $request->all());

        $serverKey = config('services.midtrans.server_key');
        $hashed = hash('sha512', $request->order_id . $request->status_code . $request->gross_amount . $serverKey);

        // Validasi signature biar aman
        if ($hashed !== $request->signature_key) {
            Log::warning('Signature tidak valid!');
            return response()->json(['message' => 'Invalid signature'], 403);
        }

        // Ambil invoice berdasarkan order_id
        $invoice = Invoice::where('invoice_number', $request->order_id)->first();

        if (!$invoice) {
            Log::error('Invoice tidak ditemukan: ' . $request->order_id);
            return response()->json(['message' => 'Invoice not found'], 404);
        }

        // Update data pembayaran
        $payment = Payment::updateOrCreate(
            ['invoice_id' => $invoice->id],
            [
                'payment_type' => $request->payment_type,
                'transaction_id' => $request->transaction_id,
                'order_id' => $request->order_id,
                'gross_amount' => $request->gross_amount,
                'transaction_status' => $request->transaction_status,
                'transaction_time' => $request->transaction_time,
                'fraud_status' => $request->fraud_status ?? null,
                'va_numbers' => isset($request->va_numbers) ? json_encode($request->va_numbers) : null,
            ]
        );

        // Update status invoice sesuai status Midtrans
        if (in_array($request->transaction_status, ['capture', 'settlement'])) {
            $invoice->update(['status' => 'paid']);
        } elseif ($request->transaction_status === 'pending') {
            $invoice->update(['status' => 'pending']);
        } elseif (in_array($request->transaction_status, ['deny', 'expire', 'cancel'])) {
            $invoice->update(['status' => 'failed']);
        }

        return response()->json(['message' => 'Webhook processed successfully']);
    }
}