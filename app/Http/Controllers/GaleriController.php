<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Galeri;

class GaleriController extends Controller
{
    //
    public function index()
    {
        //return Inertia::render('Buku/List');
        //$featuredBuku   = Buku::whereIsFeatured(true)->get();
        //$galeri           = Galeri::all();
        $galeri   = Galeri::whereCategory("Galeri")->get();

        return inertia ('Galeri/List',[
            //'featuredBuku'  => $featuredBuku,
            'galeri'          => $galeri,
        ]);
        /*return  [
            'featuredBuku' => $featuredBuku,
            'buku'          => $buku,
        ];*/
    }
}
