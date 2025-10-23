<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Invoice;
use App\Models\Payment;
use App\Models\Member;
use App\Models\PaymentProof;
use Midtrans\Snap;
use Midtrans\Config;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Mail;
use App\Mail\PaymentSuccessMail;

class TransaksiController extends Controller
{
    private function parsePaymentType($d)
    {
        if (!$d || empty($d->payment_type)) return null;

        $main = $d->payment_type;

        // QRIS → cek acquirer atau issuer
        if ($main === 'qris') {
            $acq = $d->acquirer ?? $d->issuer ?? null;
            return $acq ? "qris-$acq" : "qris";
        }

        // Bank transfer
        if ($main === 'bank_transfer') {
            if (!empty($d->va_numbers[0]->bank)) {
                return "bank_{$d->va_numbers[0]->bank}-va";
            }
        }

        // Echannel
        if ($main === 'echannel') {
            return "echannel-mandiri";
        }

        // Specific wallet
        if ($main === 'gopay') return "gopay-wallet";
        if ($main === 'shopeepay') return "shopeepay-wallet";

        return $main;
    }


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
            'type' => $product->type,
            'invoice_number' => $invoiceNumber,
            'product_id' => $product->id,
            'total_amount' => $product->price,
            'status' => 'pending',
            'description' => 'Pembayaran ' . ucfirst($product->name),
        ]);

        // ⛓️ Tambah ke invoice_items
        $invoice->items()->create([
            'item_name' => $product->name,
            'quantity' => 1,
            'price' => $product->price,
            'subtotal' => $product->price,
        ]);

        \Midtrans\Config::$serverKey = config('midtrans.server_key');
        \Midtrans\Config::$isProduction = config('midtrans.is_production');
        \Midtrans\Config::$isSanitized = true;
        \Midtrans\Config::$is3ds = true;

        $orderId = 'INV-' . $invoice->id . '-' . time();
        
        $params = [
            'transaction_details' => [
                'order_id' => $orderId,
                'gross_amount' => $product->price,
            ],
            'customer_details' => [
                'first_name' => $user->name,
                'email' => $user->email,
            ],
            'notification_url' => url('/midtrans/notification'),
        ];

        $snapToken = \Midtrans\Snap::getSnapToken($params);

        $invoice->update([
            'order_id' => $orderId,
            'snap_token' => $snapToken,
            'payment_token' => $snapToken, 
        ]);

        // 🧾 (Langkah berikutnya nanti panggil Midtrans Snap)
        return redirect()->route('anggota.dashboard.invoice.show', $invoice->id)
            ->with('success', 'Invoice berhasil dibuat!');
    }

    public function show($id)
    {
        //$invoice = Invoice::with(['user', 'items'])->findOrFail($id);
        $invoice = Invoice::with([
            'items',
            'user',
            'user.member',
        ])
        ->where('id', $id)
        ->where('user_id', auth()->id())
        ->firstOrFail();

        $member = Member::where('id_user', $invoice->user_id)->first();

        // Jika ingin pajak otomatis, misal 11%
        $taxRate = 0.11; // 11% PPN
        $taxAmount = $invoice->total_amount * $taxRate;
        $grandTotal = $invoice->total_amount + $taxAmount;

        //$grossAmount = $invoice->total_amount ?? 0; //amount total biasa
        $grossAmount = $grandTotal; // total + tax

        

        return inertia('Invoice/Show', [
            'invoice' => $invoice,
            'member' => $member,
            'snapToken'    => $invoice->payment_token,
            'tax' => $taxAmount,
            'grand_total' => $grandTotal,
            'order_id'     => $invoice->order_id,
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

        $oldStatus = $invoice->status;

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

    public function notificationHandlerOld(Request $request)
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

            // 🔎 Ambil invoice
            $invoice = Invoice::where('invoice_number', $orderId)->first();

            // backup jika format order_id = prefix-ID
            if (!$invoice && str_contains($orderId, '-')) {
                $parts = explode('-', $orderId);
                $invoice = Invoice::find($parts[1] ?? null);
            }

            if (!$invoice) {
                \Log::error('Invoice not found: '.$orderId);
                return response()->json(['message' => 'Invoice not found'], 404);
            }

            // 🔄 Update status invoice
            if (in_array($transaction, ['capture', 'settlement'])) {
                $invoice->update(['status' => 'paid']);
            } elseif ($transaction == 'pending') {
                $invoice->update(['status' => 'pending']);
            } else {
                $invoice->update(['status' => 'failed']);
            }

            // 🔄 Simpan / update data payment
            Payment::updateOrCreate(
                ['order_id' => $orderId],
                [
                    'invoice_id' => $invoice->id,
                    'transaction_id' => $notif->transaction_id ?? null,
                    'gateway' => 'midtrans bro',
                    'payment_type' => $notif->payment_type ?? null,
                    'gross_amount' => $notif->gross_amount ?? 0,
                    'transaction_status' => $transaction,
                    'transaction_time' => $notif->transaction_time ?? now(),
                    'fraud_status' => $notif->fraud_status ?? null,
                    'payment_token' => $invoice->snap_token,
                    'receipt_url' => $detail->receipt_url ?? null,
                ]
            );

            
            // 🔥 UPDATE STATUS MEMBER HANYA UNTUK IURAN + BERHASIL BAYAR
            if ($transaction === 'settlement' && $invoice->type === 'iuran') {

                // cari member berdasarkan USER
                $member = Member::where('id_user', $invoice->user_id)->first();

                if ($member) {
                    $member->update([
                        'status' => 1,
                        'iuran_status' => 'aktif',
                        'iuran_berlaku_hingga' => now()->addYear(), 
                    ]);
                } else {
                    \Log::error("Member not found for user_id: ".$invoice->user_id);
                }
            }

            return response()->json(['message' => 'ok'], 200);

        } catch (\Exception $e) {
            \Log::error('Midtrans Notification Error', ['message' => $e->getMessage()]);
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function notificationHandler(Request $request)
    {
        \Midtrans\Config::$serverKey = config('midtrans.server_key');
        \Midtrans\Config::$isProduction = config('midtrans.is_production');
        \Midtrans\Config::$isSanitized = true;
        \Midtrans\Config::$is3ds = true;

        try {
            // Ambil raw body biar payment_type 100% akurat
            $notif = new \Midtrans\Notification();
            $orderId = $notif->order_id;

            // 🚀 Ambil data lengkap dari Midtrans
            $detail = \Midtrans\Transaction::status($orderId);

            // Gunakan parsePaymentType tapi pakai $detail
            $paymentType = $this->parsePaymentType($detail);

            //$notif = new \Midtrans\Notification();

            $transaction   = $notif->transaction_status;
            $orderId       = $notif->order_id;
            //$paymentType   = $data->payment_type ?? $notif->payment_type;
            $fraudStatus   = $notif->fraud_status ?? null;

            \Log::info('Midtrans Callback', [
                'order_id' => $orderId,
                'status'   => $transaction,
                'payment_type' => $paymentType,
            ]);

            // ===============================
            //   CARI INVOICE DARI order_id
            // ===============================
            $invoice = null;

            if (str_starts_with($orderId, 'INV-')) {
                $parts = explode('-', $orderId);
                $invoiceId = intval($parts[1] ?? 0);
                $invoice = Invoice::find($invoiceId);
            }

            if (!$invoice) {
                \Log::error("Invoice Not Found for order_id: $orderId");
                return response()->json(['message' => 'invoice not found'], 404);
            }

            $oldStatus = $invoice->status;

            // ===============================
            //   UPDATE STATUS INVOICE
            // ===============================
            if (in_array($transaction, ['capture', 'settlement'])) {
                $invoice->update([
                    'gateway'       => 'midtrans',
                    'method'        => 'digital',
                    'status'        => 'paid',
                    'paid_at'       => now(),
                    'payment_type'  => $paymentType,
                    'payment_token' => $invoice->snap_token,
                ]);

                $invoice->logs()->create([
                    'user_id'       => $invoice->user_id,
                    'action'        =>'midtrans_paid',
                    'description'   =>'Pembayaran Midtrans berhasil',
                    'old_status'    =>$oldStatus,
                    'new_status'    =>'paid',
                    'ip_address'    =>request()->ip(),
                ]);
            } elseif ($transaction === 'pending') {
                $invoice->update([
                    'gateway'       => 'midtrans',
                    'method'        => 'digital',
                    'status'        => 'pending',
                    'payment_type'  => $paymentType,
                    'payment_token' => $invoice->snap_token,
                ]);
                $invoice->logs()->create([
                    'user_id'       => $invoice->user_id,
                    'action'        =>'midtrans_pending',
                    'description'   =>'Menunggu pembayaran Midtrans',
                    'old_status'    =>$oldStatus,
                    'new_status'    =>'pending',
                    'ip_address'    =>request()->ip(),
                ]);
            } else {
                $invoice->update([
                    'gateway'       => 'midtrans',
                    'method'        => 'digital',
                    'status'        => 'failed',
                    'payment_type'  => $paymentType,
                    'payment_token' => $invoice->snap_token,
                ]);

                $invoice->logs()->create([
                    'user_id'       => $invoice->user_id,
                    'action'        =>'midtrans_failed',
                    'description'   =>'Pembayaran Midtrans gagal atau expired',
                    'old_status'    =>$oldStatus,
                    'new_status'    =>'failed',
                    'ip_address'    =>request()->ip(),
                ]);
            }
            

            // ===============================
            //   UPDATE / CREATE PAYMENT
            // ===============================
            Payment::updateOrCreate(
                ['order_id' => $orderId],
                [
                    'invoice_id'         => $invoice->id,
                    'transaction_id'     => $notif->transaction_id ?? null,
                    'gateway'            => 'midtrans',
                    'type'               => $invoice->type,
                    'payment_type'       => $paymentType,
                    'gross_amount'       => $notif->gross_amount ?? 0,
                    'transaction_status' => $transaction,
                    'transaction_time'   => $notif->transaction_time ?? now(),
                    'fraud_status'       => $fraudStatus,
                    'payment_token'      => $invoice->snap_token,  // ambil dari invoice
                    'receipt_url' => $detail->receipt_url ?? null,
                ]
            );

            // Kirim email setelah pembayaran berhasil
            if (
                ($transaction === 'settlement' || $transaction === 'capture')
                && !$invoice->payment_email_sent_at
            ) {

                $invoice->load('user');

                Mail::to($invoice->user->email)
                    ->send(new PaymentSuccessMail($invoice));


                $invoice->update([
                    'payment_email_sent_at' => now()
                ]);
            }


            // ===============================
            //   UPDATE STATUS MEMBER (IURAN)
            // ===============================
            if ($transaction === 'settlement' && $invoice->type === 'iuran') {

                $member = Member::where('id_user', $invoice->user_id)->first();

                if ($member) {
                    $member->update([
                        'status' => 1,
                        'iuran_status' => 'aktif',
                        'iuran_berlaku_hingga' => now()->addYear(),
                    ]);
                } else {
                    \Log::error("Member not found for user_id: ".$invoice->user_id);
                }
            }

            return response()->json(['message' => 'ok'], 200);

        } catch (\Exception $e) {
            \Log::error('Midtrans Error', ['message' => $e->getMessage()]);
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function download($id)
    {
        // Ambil invoice lengkap + relasi
        $query = Invoice::with([
        'items',
        'user',
        'user.member',
        'payment'
        ])
        ->where('id', $id);


        // Kalau bukan admin, hanya boleh invoice sendiri
        if (!auth()->user()->hasRole('admin')) {
            $query->where('user_id', auth()->id());
        }


        $invoice = $query->firstOrFail();

        // Data Member
        $member = $invoice->user->member ?? null;

        // List Item
        $items = $invoice->items ?? collect([]);

        // Payment (fallback jika belum ada callback)
        $payment = $invoice->payment ?? (object) [
            'payment_type'       => $invoice->payment_type ?? '-',
            'transaction_status' => $invoice->status,
            'transaction_time'   => $invoice->paid_at,
            'gross_amount'       => $invoice->total,
            'order_id'           => $invoice->order_id,
            'receipt_url'        => null,
        ];

        // Pajak / No telp / Alamat — fallback
        $memberPhone   = $member->phone ?? '-';
        $memberAddress = $member->address ?? '-';

        // Pajak jika pakai tax
        $tax = $invoice->tax ?? 0;

        // bug Logo
        $image = public_path('storage/logo/Invoice-Apha.png');
        $type = pathinfo($image, PATHINFO_EXTENSION);
        $imageData = file_get_contents($image);
        $logo = 'data:image/' . $type . ';base64,' . base64_encode($imageData);

        // Misahin Method
        $method = $payment->payment_type ?? '-';

        $channel = '-';

        if (str_contains($method, '-')) {
            [$method, $channel] = explode('-', $method);
        }


        // Kirim ke view PDF
        $data = [
            'invoice' => $invoice,
            'member'  => $member,
            'items'   => $items,
            'payment' => $payment,
            'memberPhone' => $memberPhone,
            'memberAddress' => $memberAddress,
            'tax' => $tax,
            'logo' => $logo,
            'paymentMethod' => strtoupper($method),
            'paymentChannel' => ucfirst($channel),
        ];

        $pdf = Pdf::loadView('pdf.invoiceproduk', $data)
                ->setPaper('A4', 'portrait');
        //dd(public_path('storage/logo/Logo-Apha.png'));
        //dd(file_exists(public_path('storage/logo/Logo-Apha.png')));
        //dd(file_exists(public_path('storage/logo/Invoice-Apha.png')));

        return $pdf->download('Invoice-'.$invoice->invoice_number.'.pdf');
    }

    public function download_proof($id)
    {
        $payment = PaymentProof::with([
            'invoice.items',
            'invoice.user.member',
            'user'
        ])
        ->where('id', $id)
        ->where('id_user', auth()->id())
        ->firstOrFail();

        $invoice = $payment->invoice;
        abort_if(!$invoice, 404, 'Invoice tidak ditemukan.');
        $member = $invoice->user->member ?? null;
        $items = $invoice->items ?? collect();
        $memberPhone = $member->phone ?? '-';
        $memberAddress = $member->address ?? '-';

        $tax = $invoice->tax ?? 0;
        $image = public_path('storage/logo/Invoice-Apha.png');
        $type = pathinfo($image, PATHINFO_EXTENSION);
        $imageData = file_get_contents($image);
        $logo = 'data:image/'.$type.';base64,'.base64_encode($imageData);

        /*
        |--------------------------------------------------------------------------
        | Payment Method
        |--------------------------------------------------------------------------
        */

        $method = $invoice->payment_type ?? '-';
        $channel = '-';

        if (!empty($method) && str_contains($method, '-')) {
            [$method, $channel] = explode('-', $method);
        }

        /*
        |--------------------------------------------------------------------------
        | Data PDF
        |--------------------------------------------------------------------------
        */

        $data = [
            'invoice' => $invoice,
            'payment' => $payment,
            'member' => $member,
            'items' => $items,
            'memberPhone' => $memberPhone,
            'memberAddress' => $memberAddress,
            'tax' => $tax,
            'logo' => $logo,
            'paymentMethod' => strtoupper($method),
            'paymentChannel' => ucfirst($channel),
        ];

        $pdf = Pdf::loadView('pdf.invoiceproof', $data)
            ->setPaper('A4', 'portrait');

        return $pdf->download('Invoice-'.$payment->no_invoice.'.pdf');
    }
    
}