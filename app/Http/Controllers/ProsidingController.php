<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Prosiding;
use App\Models\Konfigurasi;

class ProsidingController extends Controller
{
    //
    public function index()
    {
        //return Inertia::render('Buku/List');
        $featuredProsiding   = Prosiding::whereIsFeatured(true)->get();
        $prosiding           = Prosiding::orderBy('id', 'desc')->get();
        $konfigurasis           = Konfigurasi::where('konfigurasis.id', '=', 1)->first();

        return inertia ('Prosiding/List',[
            'featuredProsiding'  => $featuredProsiding,
            'prosiding'          => $prosiding,
            'event' => [
                'application-name'          => $konfigurasis->namawebsite,
                'title'                     => 'Prosiding Asosiasi Pengajar Hukum Adat (APHA) Indonesia',
                'description'               => $konfigurasis->description,
                'keywords'                  => $konfigurasis->metatag,
                'image'                     => 'https://i.imgur.com/R4DyCBa.png',
                'image_alt'                 => 'Prosiding Asosiasi Pengajar Hukum Adat (APHA) Indonesia',
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
            'featuredBuku' => $featuredBuku,
            'buku'          => $buku,
        ];*/
    }

    public function show(Prosiding $prosiding){
        return Inertia::render('Prosiding/Show', ['prosiding' => $prosiding]);
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
    }
}
