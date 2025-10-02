<?php

namespace App\Http\Controllers\Anggota;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\URL;
use App\Models\Invoice; 
use App\Models\Konfigurasi; 
use Inertia\Inertia;
use App\Http\Requests\Member\Invoices\Store;
use App\Http\Requests\Member\Invoices\Update;
use Storage;
use App\Services\MidtransService;

class InvoiceController extends Controller
{
    //

    public function index(Request $request)
    {
        $invoices = Invoice::where('user_id', auth()->id())
        ->latest()
        ->get();

        return Inertia::render('Anggota/Invoice/List', [
            'invoices' => $invoices
        ]);
    }

    public function indextest(Request $request)
    {
        $user = $request->user();
        $invoices = Invoice::with('items', 'payment')->where('user_id', $user->id)->get();

        return response()->json($invoices);
    }

    public function pay($id, MidtransService $midtrans)
    {
        $invoice = Invoice::with('items', 'user')->findOrFail($id);

        // buat snap token untuk pembayaran
        $snapToken = $midtrans->createTransaction($invoice);

        // simpan ke tabel payments
        $invoice->payment()->create([
            'payment_type' => 'Midtrans',
            'order_id' => $invoice->invoice_number,
            'gross_amount' => $invoice->total_amount,
            'transaction_status' => 'pending',
            'payment_token' => $snapToken,
        ]);

        return response()->json(['snap_token' => $snapToken]);
    }
}
