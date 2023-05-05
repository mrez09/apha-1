<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\News;

class NewsController extends Controller
{
    //
    
    public function index()
    {
        
        //return Inertia::render('Buku/List');
        $featuredNews   = News::whereIsFeatured(true)->get();
        $news           = News::all();

        return inertia ('News/List',[
            'featuredNews'  => $featuredNews,
            'news'          => $news,
        ]);
        /*return  [
            'featuredNews' => $featuredNews,
            'news'          => $news,
        ];*/
    }

    public function show(News $news){
        return Inertia::render('News/Show', ['news' => $news]);
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
    }


    
}
