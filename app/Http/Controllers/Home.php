<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\News;
use App\Models\Buku;

class Home extends Controller
{
    //
    public function index()
    {
        
        //return Inertia::render('Buku/List');
        $featuredNews   = News::whereIsFeatured(true)->get();
        $news           = News::all();
        $featuredBuku   = Buku::whereIsFeatured(true)->get();

        return inertia ('Home',[
            'featuredNews'  => $featuredNews,
            'featuredBuku'  => $featuredBuku,
            'news'          => $news,
        ]);
        /*return  [
            'featuredNews' => $featuredNews,
            'news'          => $news,
        ];*/
    }
}
