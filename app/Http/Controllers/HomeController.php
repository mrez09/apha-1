<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\News;
use App\Models\Buku;
use App\Models\Banner;

class HomeController extends Controller
{
    //
    public function index()
    {
        
        //return Inertia::render('Buku/List');
        $featuredNews   = News::whereIsFeatured(true)->get();
        $news           = News::all();
        $featuredBuku   = Buku::whereIsFeatured(true)->get();
        $featuredBanner = Banner::whereIsFeatured(true)->whereCategory("Banner")->get();
        $buttonBanner   = Banner::whereIsFeatured(true)->whereCategory("Banner")->get();
        $mainBanner     = Banner::whereIsFeatured(true)->whereCategory("MainBanner")->get();

        return inertia ('Home',[
            'mainBanner'  => $mainBanner,
            'featuredBanner'  => $featuredBanner,
            'buttonBanner'  => $buttonBanner,
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
