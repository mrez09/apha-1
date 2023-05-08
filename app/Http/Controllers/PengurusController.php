<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PengurusController extends Controller
{
    public function penasehat()
    {
        
        //return Inertia::render('Buku/List');
        //$featuredNews   = News::whereIsFeatured(true)->get();
        //$news           = News::all();
        //$featuredBuku   = Buku::whereIsFeatured(true)->get();
        //$featuredBanner   = Galeri::whereIsFeatured(true)->whereCategory("Banner")->get();

        return inertia ('Pengurus/Penasehat',[
            //'featuredBanner'  => $featuredBanner,
            //'featuredNews'  => $featuredNews,
            //'featuredBuku'  => $featuredBuku,
            //'news'          => $news,
        ]);
        /*return  [
            'featuredNews' => $featuredNews,
            'news'          => $news,
        ];*/
    }
    //
}
