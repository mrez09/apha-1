<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Video;
use App\Models\Konfigurasi;

class VideoController extends Controller
{
    //
    public function index()
    {
        //return Inertia::render('Buku/List');
        //$featuredBuku   = Buku::whereIsFeatured(true)->get();
        //$galeri           = Galeri::all();
        $video   = Video::whereCategory("Video")->where('is_featured', '=', 1)->get();
        $konfigurasis           = Konfigurasi::where('konfigurasis.id', '=', 1)->first();

        return inertia ('Video/List',[
            //'featuredBuku'  => $featuredBuku,
            'galeri'          => $video,
            'event' => [
                'application-name'          => $konfigurasis->namawebsite,
                'title'                     => 'Video Asosiasi Pengajar Hukum Adat (APHA) Indonesia',
                'description'               => $konfigurasis->description,
                'keywords'                  => $konfigurasis->metatag,
                'image'                     => 'https://i.imgur.com/R4DyCBa.png',
                'image_alt'                 => 'Video Dokumentasi Asosiasi Pengajar Hukum Adat (APHA) Indonesia',
                'image_type'                => 'image/jpeg',
                'image_width'               => '1800',
                'image_height'              => '550',
                'og:type'                   => 'website',
                'url'                       => $konfigurasis->address,
                'fb:app_id'                 => $konfigurasis->fbid,
                'theme-color'               => '#ff6300',
                'mobile-web-app-capable'    => 'yes',
                'apple-mobile-web-app-title'=> 'Video Asosiasi Pengajar Hukum Adat',
                'card'                      => 'summary_large_image',
            ]
        ]);
        /*return  [
            'featuredBuku' => $featuredBuku,
            'buku'          => $buku,
        ];*/
    }
}
