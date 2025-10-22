<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::latest()
            ->paginate(10);

        return Inertia::render(
            'Admin/Products/List',
            [
                'products' => $products
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render(
            'Admin/Products/Create'
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'type' => 'required|string',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date',
            'is_active' => 'required|boolean',
        ]);


        Product::create($data);


        return redirect()
            ->route('admin.dashboard.products.index')
            ->with([
                'message'=>'Product berhasil dibuat',
                'type'=>'success'
            ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        return Inertia::render(
            'Admin/Products/Edit',
            [
                'product'=>$product
            ]
        );
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'type' => 'required|string',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date',
            'is_active' => 'required|boolean',
        ]);


        $product->update($data);


        return redirect()
            ->route('admin.dashboard.products.index')
            ->with([
                'message'=>'Product berhasil diperbarui',
                'type'=>'success'
            ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        if ($product->invoices()->exists()) {
            return back()->with([
                'message' => 'Product tidak bisa dihapus karena sudah digunakan invoice.',
                'type' => 'error'
            ]);
        }

        $product->delete();
        return back()->with([
            'message' => 'Product berhasil dihapus.',
            'type' => 'success'
        ]);
    }

}
