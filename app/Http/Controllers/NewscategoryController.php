<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\News;
use App\Models\Newscategory;

class NewscategoryController extends Controller
{
    //
    public function index()
    {
        
        //return Inertia::render('Buku/List');
        $featuredNews   = News::whereIsFeatured(true)->get();
        $news           = News::orderBy('publish_at', 'desc')->get();

        return inertia ('Newscategory/List',[
            'featuredNews'  => $featuredNews,
            'news'          => $news,
        ]);
        /*return  [
            'featuredNews' => $featuredNews,
            'news'          => $news,
        ];*/
    }

    public function show(Newscategory $newscategory){
        //$news->increment('view');
        //$newsjoin           = News::find($news->id);
        $newscat           = News::where('status', '=', 'Publish')->where('news.category', '=', $newscategory->id)->orderBy('publish_at', 'desc')->get();
        $newsj           = News::select('news.id as link_id','judul', 'view', 'img', 'name')->join('users','users.id',"=",'news.id_user')->get();
        //$newsjoin           = News::select('news.id as link_id','judul', 'view', 'namakategori', 'img', 'name', 'newscategories.id as id_cat')->join('users','users.id',"=",'news.id_user')->join('newscategories','newscategories.id',"=",'news.category')->where('news.slug', $news->slug)->find($news->id);
        //$newsjoin           = News::select('news.id as link_id','judul', 'view', 'namakategori', 'img', 'name', 'newscategories.id as id_cat')->join('users','users.id',"=",'news.id_user')->join('newscategories','newscategories.id',"=",'news.category')->where('news.slug', $news->slug)->get();
        $catget           = Newscategory::where('newscategories.slug', '=', $newscategory->slug)->first();
        return Inertia::render('Newscategory/List', 
        [
            'news' => $newscat, 
            'newscategory'  => $newscategory,
            //'newsjoin' => $newsjoin
        ]);
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
    }
}
