<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Buku;

class BukuController extends Controller
{
    //
    public function index()
    {
        //return Inertia::render('Buku/List');
        $featuredBuku   = Buku::whereIsFeatured(true)->get();
        $buku           = Buku::all();

        return inertia ('Buku/List',[
            'featuredBuku'  => $featuredBuku,
            'buku'          => $buku,
        ]);
        /*return  [
            'featuredBuku' => $featuredBuku,
            'buku'          => $buku,
        ];*/
    }

    public function show(Buku $buku){
        return Inertia::render('Buku/Show', ['buku' => $buku]);
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
    }
}
