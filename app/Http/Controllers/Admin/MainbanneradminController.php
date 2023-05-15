<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\Galeri;
use Inertia\Inertia;
use App\Http\Requests\Admin\Banner\Store;
use App\Http\Requests\Admin\Banner\Update;
use Storage;

class MainbanneradminController extends Controller
{
    //
    public function index(){
        //$galeri          = Galeri::all();
        $galeri          = Galeri::whereCategory("MainBanner")->get();
        return Inertia::render('Admin/MainBanner/List',
    [
        'galeri'          => $galeri
    ]);
      //return  [
        //    'news'          => $news,
        //];  

    }

    public function edit(Galeri $mainbanner){
        //return $news;
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
        //$news           = News::all();
        return Inertia::render('Admin/MainBanner/Edit',
        [
            'mainbanner'          => $mainbanner
        ]);
    }

    public function show(Galeri $galeri){
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
    }
}
