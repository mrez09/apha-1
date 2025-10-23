<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Invoice;
use App\Models\InvoiceItem;
use App\Models\User;
use App\Models\Product;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class InvoiceController extends Controller
{
    public function index()
    {
       $invoices = Invoice::with([
            'user',
            'items',
            'payment',
            'paymentProof'
        ])
        ->latest()
        ->get();


        return Inertia::render(
            'Admin/Invoices/List',
            [
                'invoices' => $invoices
            ]
        );
    }

    public function create()
    {
        $users = User::whereHas('member')
            ->orderBy('name')
            ->get();


        $products = Product::where('is_active', 1)
            ->orderBy('name')
            ->get();


        return Inertia::render(
            'Admin/Invoices/Create',
            [
                'users' => $users,
                'products' => $products,
            ]
        );
    }

    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'product_id' => 'required|exists:products,id',
            'notes' => 'nullable|string',
        ]);
        $product = Product::findOrFail(
            $request->product_id
        );

        //ngecek iuran tahun ini bro.
        if ($product->type === 'iuran') {

            $alreadyExists = Invoice::where(
                'user_id',
                $request->user_id
            )
            ->where('product_id', $product->id)
            ->whereYear(
                'created_at',
                now()->year
            )
            ->exists();

            if ($alreadyExists) {
                return back()
                    ->with([
                        'message'=>'Anggota ini sudah memiliki invoice iuran tahun ini.',
                        'type'=>'error'
                    ]);
            }
        }


        // Ambil product
        $product = Product::findOrFail(
            $request->product_id
        );


        // Buat nomor invoice
        $invoiceNumber = 'INV-' 
            . now()->format('Ymd')
            . '-'
            . strtoupper(Str::random(5));


        // Buat Invoice
        $invoice = Invoice::create([
            'user_id' => $request->user_id,
            'product_id' => $product->id,
            'invoice_number' => $invoiceNumber,
            'type' => $product->type,
            'total_amount' => $product->price,
            'status' => 'pending',
            'notes' => $request->notes,
        ]);

        $invoice->logs()->create([
            // pemilik invoice
            'user_id' => $invoice->user_id,
            // admin yang membuat
            'performed_by' => auth()->id(),
            'action' => 'invoice_created',
            'description' => 'Invoice berhasil dibuat oleh admin',
            'new_status' => $invoice->status,
            'ip_address' => request()->ip(),
        ]);


        // Buat invoice item
        InvoiceItem::create([
            'invoice_id' => $invoice->id,
            'item_name' => $product->name,
            'quantity' => 1,
            'price' => $product->price,
            'subtotal' => $product->price,
        ]);

        return redirect()
            ->route(
                'admin.dashboard.invoices.show',
                $invoice->id
            )
            ->with([
                'message'=>'Invoice berhasil dibuat',
                'type'=>'success'
            ]);
    }

    public function generatePaymentold($id)
    {
        $invoice = Invoice::findOrFail($id);


        \Midtrans\Config::$serverKey = config('midtrans.server_key');
        \Midtrans\Config::$isProduction = false;
        \Midtrans\Config::$isSanitized = true;
        \Midtrans\Config::$is3ds = true;


        $params = [
            'transaction_details' => [
                'order_id' => 'INV-'.$invoice->id,
                'gross_amount' => $invoice->total_amount,
            ],

            'customer_details' => [
                'first_name' => $invoice->user->name,
                'email' => $invoice->user->email,
            ],
        ];


        $snapToken = \Midtrans\Snap::getSnapToken($params);


        $invoice->update([
            'order_id' => 'INV-'.$invoice->id,
            'payment_token' => $snapToken,
        ]);


        return back()->with([
            'message'=>'Payment berhasil dibuat',
            'type'=>'success'
        ]);
    }

    public function generatePayment($id)
    {
        $invoice = Invoice::with('user')->findOrFail($id);


        \Midtrans\Config::$serverKey = config('midtrans.server_key');
        \Midtrans\Config::$isProduction = false;
        \Midtrans\Config::$isSanitized = true;
        \Midtrans\Config::$is3ds = true;


        // order id harus unik
        $orderId = 'INV-'.$invoice->id.'-'.time();


        $params = [
            'transaction_details' => [
                'order_id' => $orderId,
                'gross_amount' => $invoice->total_amount,
            ],

            'customer_details' => [
                'first_name' => $invoice->user->name,
                'email' => $invoice->user->email,
            ],
        ];


        $snapToken = \Midtrans\Snap::getSnapToken($params);


        $invoice->update([
            'order_id' => $orderId,
            'payment_token' => $snapToken,
            'status' => 'pending',
        ]);

        $invoice->logs()->create([
            'user_id' => $invoice->user_id,
            'performed_by' => auth()->id(),
            'action' => 'midtrans_generated',
            'description' => 'Snap Token Midtrans berhasil dibuat',
            'ip_address' => request()->ip(),
        ]);


        return back()->with([
            'message'=>'Payment berhasil dibuat',
            'type'=>'success'
        ]);
    }

    public function show($id)
    {
        $invoice = Invoice::with([
            'user',
            'items',
            'payment',
            'payments',
            'paymentProof'
        ])
        ->findOrFail($id);


        return Inertia::render('Admin/Invoices/Show', [
            'invoice'=>$invoice
        ]);
    }
    
    public function editold(Invoice $invoice)
    {
        if ($invoice->status === 'paid') {
            return back()->with(
                'error',
                'Invoice yang sudah dibayar tidak dapat diubah.'
            );
        }

        return Inertia::render(
            'Admin/Invoice/Edit',
            [
                'invoice' => $invoice,
            ]
        );
    }

    public function edit($id)
    {
        $invoice = Invoice::with([
            'user',
            'product'
        ])
        ->findOrFail($id);


        $products = Product::where('is_active', 1)
            ->orderBy('name')
            ->get();


        return Inertia::render(
            'Admin/Invoices/Edit',
            [
                'invoice' => $invoice,
                'products' => $products,
            ]
        );
    }

    public function updateold(
    UpdateInvoiceRequest $request,
    Invoice $invoice
    ) {
        if ($invoice->status === 'paid') {
            return back();
        }

        $invoice->update($request->validated());

        return back()->with(
            'message',
            'Invoice berhasil diperbarui.'
        );
    }

    public function update(Request $request, $id)
    {
        $invoice = Invoice::findOrFail($id);


        $request->validate([
            'product_id'=>'required|exists:products,id',
            'notes'=>'nullable',
            'due_date'=>'nullable|date',
        ]);


        $product = Product::findOrFail(
            $request->product_id
        );


        $invoice->update([

            'product_id'=>$product->id,

            'type'=>$product->type,

            'total_amount'=>$product->price,

            'notes'=>$request->notes,

            'due_date'=>$request->due_date,

        ]);


        return back()->with([
            'message'=>'Invoice berhasil diperbarui',
            'type'=>'success'
        ]);
    }

    public function destroy(Invoice $invoice)
    {
        $invoice->delete();

        return back()->with(
            'message',
            'Invoice berhasil dihapus.'
        );
    }
    public function restore($id)
    {
        Invoice::withTrashed()
            ->findOrFail($id)
            ->restore();

        return back()->with(
            'message',
            'Invoice berhasil dipulihkan.'
        );
    }
}