<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Invoice;
use App\Models\Payment;
use Midtrans\Snap;
use Midtrans\Config;
use Illuminate\Support\Str;
use Inertia\Inertia;

class TransaksiController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return Inertia::render('Anggota/Produk/Index', [
            'products' => $products
        ]);
    }

    public function createInvoice($id)
    {
        
        $user = auth()->user();
        $product = Product::findOrFail($id);

        // 🔢 Generate nomor invoice unik
        $invoiceNumber = 'INV-' . date('Ymd') . '-' . Str::random(5);

        // 💾 Simpan ke tabel invoices
        $invoice = Invoice::create([
            'user_id' => $user->id,
            'invoice_number' => $invoiceNumber,
            'total_amount' => $product->price,
            'status' => 'pending',
        ]);

        // ⛓️ Tambah ke invoice_items
        $invoice->items()->create([
            'item_name' => $product->name,
            'quantity' => 1,
            'price' => $product->price,
            'subtotal' => $product->price,
        ]);

        // 🧾 (Langkah berikutnya nanti panggil Midtrans Snap)
        return redirect()->route('anggota.dashboard.invoice.show', $invoice->id)
            ->with('success', 'Invoice berhasil dibuat!');
    }

    public function show($id)
    {
        $invoice = Invoice::with(['user', 'items'])->findOrFail($id);

        // ✅ Inisialisasi konfigurasi Midtrans
        \Midtrans\Config::$serverKey = config('midtrans.server_key');
        \Midtrans\Config::$isProduction = config('midtrans.is_production');
        \Midtrans\Config::$isSanitized = true;
        \Midtrans\Config::$is3ds = true;

        // ✅ Pastikan total_amount digunakan
        $grossAmount = $invoice->total_amount ?? 0;

        $orderId = 'INV-' . $invoice->id . '-' . now()->format('YmdHis');

        if (!$invoice->snap_token) {
            $params = [
                'transaction_details' => [
                    //'order_id' => $invoice->invoice_number,
                    'order_id' => 'INV-' . $invoice->id . '-' . time(),
                    'gross_amount' => $grossAmount,
                ],
                'customer_details' => [
                    'first_name' => $invoice->user->name,
                    'email' => $invoice->user->email,
                ],
                'callbacks' => [
                    'finish' => url('/invoice/finish'), // halaman yang kamu mau user lihat setelah bayar
                ],
                'notification_url' => url('/midtrans/notification'),
                            
                ];

            $snapToken = \Midtrans\Snap::getSnapToken($params);

            $invoice->update([
                'snap_token' => $snapToken,
                'order_id' => $orderId,
            ]);
            
            
            } else {
                $snapToken = $invoice->snap_token;
            }

        return inertia('Invoice/Show', [
            'invoice' => $invoice,
            'snapToken' => $snapToken,
        ]);
    }
    public function callback(Request $request)
    {
        $serverKey = config('midtrans.server_key');
        $hashed = hash("sha512", 
            $request->order_id .
            $request->status_code .
            $request->gross_amount .
            $serverKey
        );

        // Validasi signature
        if ($hashed !== $request->signature_key) {
            return response()->json(['message' => 'Invalid signature'], 403);
        }

        // Ambil ID invoice dari order_id
        $orderParts = explode('-', $request->order_id);
        $invoiceId = $orderParts[1] ?? null;

        $invoice = Invoice::find($invoiceId);
        if (!$invoice) {
            return response()->json(['message' => 'Invoice not found'], 404);
        }

        // Update status sesuai status Midtrans
        if (in_array($request->transaction_status, ['capture', 'settlement'])) {
            $invoice->status = 'paid';
        } elseif ($request->transaction_status == 'pending') {
            $invoice->status = 'pending';
        } elseif (in_array($request->transaction_status, ['deny', 'expire', 'cancel'])) {
            $invoice->status = 'failed';
        }

        $invoice->save();

        return response()->json(['message' => 'Transaction status updated']);
    }

    public function handleNotification(Request $request)
    {
        \Midtrans\Config::$serverKey = config('midtrans.server_key');
        \Midtrans\Config::$isProduction = false;
        \Midtrans\Config::$isSanitized = true;
        \Midtrans\Config::$is3ds = true;

        $notification = new \Midtrans\Notification();

        $orderId = $notification->order_id;
        $transactionStatus = $notification->transaction_status;
        $fraudStatus = $notification->fraud_status;

        // Cari invoice berdasarkan nomor
        $invoice = Invoice::where('invoice_number', $orderId)->first();

        if (!$invoice) {
            return response()->json(['message' => 'Invoice tidak ditemukan'], 404);
        }

        // Update status berdasarkan notifikasi Midtrans
        if ($transactionStatus == 'capture') {
            if ($fraudStatus == 'challenge') {
                $invoice->status = 'pending';
            } else {
                $invoice->status = 'paid';
            }
        } elseif ($transactionStatus == 'settlement') {
            $invoice->status = 'paid';
        } elseif ($transactionStatus == 'pending') {
            $invoice->status = 'pending';
        } elseif ($transactionStatus == 'deny') {
            $invoice->status = 'failed';
        } elseif ($transactionStatus == 'expire') {
            $invoice->status = 'expired';
        } elseif ($transactionStatus == 'cancel') {
            $invoice->status = 'cancelled';
        }

        $invoice->save();

        return response()->json(['message' => 'Status updated successfully']);
    }

    public function notificationHandler(Request $request)
    {
        \Midtrans\Config::$serverKey = config('midtrans.server_key');
        \Midtrans\Config::$isProduction = false;
        \Midtrans\Config::$isSanitized = true;
        \Midtrans\Config::$is3ds = true;

        try {
            $notif = new \Midtrans\Notification();

            $transaction = $notif->transaction_status;
            $orderId = $notif->order_id;

            \Log::info('Midtrans Notification Received', [
                'order_id' => $orderId,
                'transaction' => $transaction,
            ]);

            // Cari invoice
            $invoice = Invoice::where('invoice_number', $orderId)->first();
            if (!$invoice && str_contains($orderId, '-')) {
                $parts = explode('-', $orderId);
                $invoiceId = $parts[1] ?? null;
                $invoice = Invoice::find($invoiceId);
            }

            if (!$invoice) {
                \Log::error('Invoice not found for order_id ' . $orderId);
                return response()->json(['message' => 'Invoice not found'], 404);
            }

            // Update status invoice
            if (in_array($transaction, ['capture', 'settlement'])) {
                $invoice->update(['status' => 'paid']);
            } elseif ($transaction == 'pending') {
                $invoice->update(['status' => 'pending']);
            } elseif (in_array($transaction, ['deny', 'expire', 'cancel'])) {
                $invoice->update(['status' => 'failed']);
            }

            // ✅ Simpan atau update Payment di sini
            $payment = Payment::where('order_id', $orderId)->first();
            Payment::updateOrCreate(
            ['order_id' => $orderId],
            [
                'invoice_id' => $invoice->id,
                'transaction_id' => $notif->transaction_id ?? null,
                'gateway' => 'midtrans',
                'payment_type' => $notif->payment_type ?? null,
                'gross_amount' => $notif->gross_amount ?? 0,
                'transaction_status' => $transaction,
                'transaction_time' => $notif->transaction_time ?? now(),
                'fraud_status' => $notif->fraud_status ?? null,
                'payment_token' => $invoice->snap_token, 
                'receipt_url' => $notif->receipt_url ?? null,
            ]
        );

            return response()->json(['message' => 'ok'], 200);

        } catch (\Exception $e) {
            \Log::error('Midtrans Notification Error', ['message' => $e->getMessage()]);
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    
}