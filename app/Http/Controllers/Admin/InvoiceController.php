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

            'user_id'=>'required',
            'product_id'=>'required',
            'gateway'=>'required',

        ]);

        $invoiceNumber = 'INV-' . date('Ymd') . '-' . Str::random(5);

        DB::transaction(function() use($request){
            $product = Product::findOrFail(
                $request->product_id
            );

            $invoice = Invoice::create([
                'user_id'=>$request->user_id,
                'invoice_number'=> $invoiceNumber,
                'type'=>$product->type,
                'product_id'=>$product->id,
                'description'=>$product->description,
                'total_amount'=>$product->price,
                'gateway'=>$request->gateway,
                'method'=>
                    $request->gateway == 'midtrans'
                    ? 'digital'
                    : 'manual',
                'status'=>'pending',
                'due_date'=>$request->due_date,
            ]);

            InvoiceItem::create([
                'invoice_id'=>$invoice->id,
                'item_name'=>$product->name,
                'price'=>$product->price,
                'quantity'=>1,
                'subtotal'=>$product->price,
            ]);


        });

        return redirect()->route(
            'admin.dashboard.invoices.index'
        )->with(
            'message',
            'Invoice berhasil dibuat'
        );

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
    
    public function edit(Invoice $invoice)
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

    public function update(
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