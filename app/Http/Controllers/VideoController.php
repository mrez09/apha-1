<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Video;

class VideoController extends Controller
{
    //
    public function index()
    {
        //return Inertia::render('Buku/List');
        //$featuredBuku   = Buku::whereIsFeatured(true)->get();
        //$galeri           = Galeri::all();
        $video   = Video::whereCategory("Video")->get();

        return inertia ('Video/List',[
            //'featuredBuku'  => $featuredBuku,
            'galeri'          => $video,
        ]);
        /*return  [
            'featuredBuku' => $featuredBuku,
            'buku'          => $buku,
        ];*/
    }
}
