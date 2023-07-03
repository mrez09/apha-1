<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\URL;
use App\Models\Dokumen;
use App\Models\News;
use App\Models\Konfigurasi;
use Illuminate\Support\Str;
use Storage;

class DokumenController extends Controller
{
    //
    public function index()
    {
        
        //return Inertia::render('Buku/List');
        //$featuredNews   = News::whereIsFeatured(true)->get();
        $dokumen           = Dokumen::where('status', '=', 1)->orderBy('publish_at', 'desc')->get();
        $konfigurasis           = Konfigurasi::where('konfigurasis.id', '=', 1)->first();
        
        //parse
        $reptag1    = Str::replace('<p>', '', $konfigurasis->metatag);
        $metatag    = Str::replace('</p>', '', $reptag1);

        //$pardes1    = Str::replace('<p>', '', $dokumen->deskripsi);
        //$dok    = Str::replace('</p>', '', $pardes1);
        //url saat ini
        $cururl     = URL::current();
        return inertia ('Document/List',[
            //'featuredNews'  => $featuredNews,
            'dokumen'          => $dokumen,
            'event' => [
                'application-name'          => $konfigurasis->namawebsite,
                'title'                     => 'Dokumen Asosiasi Pengajar Hukum Adat (APHA) Indonesia',
                'description'               => $konfigurasis->description,
                'keywords'                  => $metatag,
                'image'                     => 'https://i.imgur.com/R4DyCBa.png',
                'image_alt'                 => 'Dokumen Asosiasi Pengajar Hukum Adat (APHA) Indonesia',
                'image_type'                => 'image/jpeg',
                'image_width'               => '1800',
                'image_height'              => '550',
                'og:type'                   => 'website',
                'url'                       => $cururl,
                'fb:app_id'                 => $konfigurasis->fbid,
                'theme-color'               => '#ff6300',
                'mobile-web-app-capable'    => 'yes',
                'apple-mobile-web-app-title'=> $konfigurasis->apple_mobile,
                'card'                      => 'summary_large_image',
            ]
        ]);
        /*return  [
            'featuredNews' => $featuredNews,
            'news'          => $news,
        ];*/
    }
}
