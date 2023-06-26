<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\URL;
use App\Models\Buku;
use App\Models\Konfigurasi;
use Illuminate\Support\Str;
use Storage;

class BukuController extends Controller
{
    //
    public function index()
    {
        //return Inertia::render('Buku/List');
        $featuredBuku   = Buku::whereIsFeatured(true)->get();
        $buku           = Buku::orderBy('id', 'desc')->get();
        $konfigurasis           = Konfigurasi::where('konfigurasis.id', '=', 1)->first();
        //url saat ini
        $cururl     = URL::current();

        return inertia ('Buku/List',[
            'featuredBuku'  => $featuredBuku,
            'buku'          => $buku,
            'event' => [
                'application-name'          => $konfigurasis->namawebsite,
                'title'                     => 'Buku Terbitan Asosiasi Pengajar Hukum Adat (APHA) Indonesia',
                'description'               => $konfigurasis->description,
                'keywords'                  => $konfigurasis->metatag,
                'image'                     => 'https://i.imgur.com/R4DyCBa.png',
                'image_alt'                 => 'Buku Terbitan Asosiasi Pengajar Hukum Adat (APHA) Indonesia',
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
            'featuredBuku' => $featuredBuku,
            'buku'          => $buku,
        ];*/
    }

    public function show(Buku $buku){
         //url saat ini
         $cururl     = URL::current();
         $konfigurasis           = Konfigurasi::where('konfigurasis.id', '=', 1)->first();
        return Inertia::render('Buku/Show', [
            'buku' => $buku,
            'event' => [
                'application-name'          => $konfigurasis->namawebsite,
                'title'                     => $buku->name,
                'description'               => $konfigurasis->description,
                'keywords'                  => $konfigurasis->metatag,
                'image'                     => 'https://i.imgur.com/R4DyCBa.png',
                'image_alt'                 => 'Buku Terbitan Asosiasi Pengajar Hukum Adat (APHA) Indonesia',
                'image_type'                => 'image/jpeg',
                'image_width'               => '1800',
                'image_height'              => '550',
                'og:type'                   => 'website',
                'url'                       => $cururl,
                'fb:app_id'                 => $konfigurasis->fbid,
                'theme-color'               => '#ff6300',
                'mobile-web-app-capable'    => 'yes',
                'apple-mobile-web-app-title'=> $buku->name,
                'card'                      => 'summary_large_image',
            ]
            ]
        );
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
    }
}
