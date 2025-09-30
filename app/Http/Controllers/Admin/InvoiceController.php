<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Invoice;
use App\Models\InvoiceItem;
use Illuminate\Support\Str;

class InvoiceController extends Controller
{
    public function index()
    {
        return response()->json(
            Invoice::with('user', 'items', 'payment')->latest()->get()
        );
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'items' => 'required|array',
            'items.*.item_name' => 'required|string',
            'items.*.quantity' => 'required|integer|min:1',
            'items.*.price' => 'required|numeric',
        ]);

        $total = collect($validated['items'])->sum(fn($i) => $i['price'] * $i['quantity']);

        $invoice = Invoice::create([
            'user_id' => $validated['user_id'],
            'invoice_number' => 'INV-' . date('Ymd') . '-' . strtoupper(Str::random(5)),
            'total_amount' => $total,
            'status' => 'pending',
        ]);

        foreach ($validated['items'] as $item) {
            InvoiceItem::create([
                'invoice_id' => $invoice->id,
                'item_name' => $item['item_name'],
                'quantity' => $item['quantity'],
                'price' => $item['price'],
                'subtotal' => $item['quantity'] * $item['price'],
            ]);
        }

        return response()->json(['message' => 'Invoice berhasil dibuat', 'invoice' => $invoice]);
    }

    public function show($id)
    {
        $invoice = Invoice::with('user', 'items', 'payment')->findOrFail($id);
        return response()->json($invoice);
    }
}