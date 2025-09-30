<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    //
    public function index()
    {
        $today = now()->toDateString();

        $products = Product::where('is_active', true)
            ->whereDate('start_date', '<=', $today)
            ->whereDate('end_date', '>=', $today)
            ->orderBy('start_date', 'asc')
            ->get();

        return response()->json($products);
    }

    public function show($id)
    {
        $product = Product::where('is_active', true)
            ->findOrFail($id);

        return response()->json($product);
    }
}
