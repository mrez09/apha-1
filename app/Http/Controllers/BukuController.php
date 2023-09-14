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
        $featuredBuku   = Buku::whereIsFeatured(true)->limit(3)->get();
        $buku           = Buku::orderBy('id', 'desc')->get();
        $bukup          = Buku::where('bukus.status', '=', 1)->orderBy('id', 'desc')->paginate(6);
        $konfigurasis           = Konfigurasi::where('konfigurasis.id', '=', 1)->first();
        //url saat ini
        $cururl     = URL::current();

        return inertia ('Buku/List',[
            'featuredBuku'  => $featuredBuku,
            'buku'          => $buku,
            'bukup'          => $bukup,
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
        //Parse Data
        $repkonten1    = Str::replace('<p>', '', $buku->sinopsis);
        $repkonten2    = Str::replace('</p>', '', $repkonten1);
        $des    = Str::words( $repkonten2, 25);

        $reptag1    = Str::replace('<p>', '', $konfigurasis->metatag);
        $metatag    = Str::replace('</p>', '', $reptag1);

        $cururl     = URL::current();
        return Inertia::render('Buku/Show', [
            'buku' => $buku,
            'event' => [
                'application-name'          => $konfigurasis->namawebsite,
                'title'                     => $buku->name,
                'description'               => $des,
                'keywords'                  => $metatag,
                'image'                     => 'https://apha.or.id/storage/'.$buku->thumbnail,
                'image_type'                => 'image/jpeg',
                'image_width'               => '250',
                'image_height'              => '550',
                'image_alt'                 => $buku->name,
                'og:type'                   => 'book',
                'publish_time'              => $buku->publish_at,
                'article_tag'               => 'Hukum Adat, APHA, Asosisasi Pengajar Hukum Adat',
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
