<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\News;
use App\Models\Buku;
use App\Models\Banner;
use App\Models\Konfigurasi;
use App\Models\Event;


class HomeController extends Controller
{
    //
    public function index()
    {
        
        //return Inertia::render('Buku/List');
        $featuredNews   = News::whereIsFeatured(true)->get();
        $news           = News::where('status', '=', 'Publish')->orderBy('publish_at', 'desc')->limit(3)->get();
        $ticker         = News::orderBy('publish_at', 'desc')->where('news.ticker', '=', 1)->limit(3)->get();
        //$featuredBuku   = Buku::limit(3)->whereIsFeatured(true)->get();
        $featuredBuku   = Buku::orderBy('id', 'desc')->limit(3)->get();
        $featuredBanner = Banner::whereIsFeatured(true)->whereCategory("Banner")->get();
        $buttonBanner   = Banner::whereIsFeatured(true)->whereCategory("Banner")->get();
        $mainBanner     = Banner::whereIsFeatured(true)->whereCategory("MainBanner")->get();
        $konfigurasis           = Konfigurasi::where('konfigurasis.id', '=', 1)->first();

        //Event
        $acara           = Event::where('events.status', '=', 'Publish')->get();

        return inertia ('Home',[
            'mainBanner'  => $mainBanner,
            'featuredBanner'  => $featuredBanner,
            'buttonBanner'  => $buttonBanner,
            'featuredNews'  => $featuredNews,
            'featuredBuku'  => $featuredBuku,
            'news'          => $news,
            'ticker'          => $ticker,
            'acara'          => $acara,
            'event' => [
                'application-name'          => $konfigurasis->namawebsite,
                'title'                     => $konfigurasis->title,
                'description'               => $konfigurasis->description,
                'keywords'                  => $konfigurasis->metatag,
                'image'                     => 'https://i.imgur.com/R4DyCBa.png',
                'image_alt'                 => 'Selamat Datang di Website Asosiasi Pengajar Hukum Adat (APHA) Indonesia',
                'image_type'                => 'image/jpeg',
                'image_width'               => '1800',
                'image_height'              => '550',
                'og:type'                   => 'website',
                'url'                       => $konfigurasis->address,
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
