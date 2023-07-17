<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\URL;
use App\Models\Commitee;
use App\Models\Subdivisi;
use App\Models\Konfigurasi;
use Illuminate\Support\Str;

class CommiteeController extends Controller
{
    //

    public function dewanpembina(){
        //$news->increment('view');
        
        $konfigurasi        = Konfigurasi::all();
        $pengurus           = Commitee::select('commitees.id as commitees_id', 'periodes.id as periode_id','nama', 'slug', 'img', 'namadivisi', 'namasubdivisi', 'namajabatan', 'namaperiode', 'commitees.periode as periode')->join('divisis','divisis.id',"=",'commitees.divisi')->join('subdivisis','subdivisis.id',"=",'commitees.subdivisi')->join('jabatans', 'jabatans.id',"=",'commitees.jabatan')->join('periodes', 'periodes.id',"=",'commitees.periode')->where('divisi', '=', 1)->get();
        $periodeget           = Konfigurasi::select('periodes.id as periode_id', 'namaperiode' ,'pengurus')->join('periodes', 'konfigurasis.pengurus',"=",'periodes.id')->where('konfigurasis.id', '=', 1)->first();
        $konfigurasis           = Konfigurasi::where('konfigurasis.id', '=', 1)->first();
        return Inertia::render('Commitee/ListPembina', 
            [
                'pengurus' => $pengurus,
                'periodeget' => $periodeget,
                'event' => [
                    'application-name'          => $konfigurasis->namawebsite,
                    'title'                     => 'Dewan Pembina Asosiasi Pengajar Hukum Adat (APHA) Indonesia',
                    'description'               => $konfigurasis->description,
                    'keywords'                  => $konfigurasis->metatag,
                    'image'                     => 'https://i.imgur.com/R4DyCBa.png',
                    'image_alt'                 => 'Dewan Pembina Asosiasi Pengajar Hukum Adat (APHA) Indonesia',
                    'image_type'                => 'image/jpeg',
                    'image_width'               => '1800',
                    'image_height'              => '550',
                    'og:type'                   => 'website',
                    'url'                       => $konfigurasis->address,
                    'fb:app_id'                 => $konfigurasis->fbid,
                    'theme-color'               => '#ff6300',
                    'mobile-web-app-capable'    => 'yes',
                    'apple-mobile-web-app-title'=> 'Dewan Pembina Asosiasi Pengajar Hukum Adat (APHA) Indonesia',
                    'card'                      => 'summary_large_image',
                ]
            ]
        );
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
    }

    public function dewanpengurus(){
        //$news->increment('view');
        
        $subdivisi          = Subdivisi::all();
        $konfigurasi        = Konfigurasi::all();
        $pengurus           = Commitee::select('commitees.id as commitees_id', 'periodes.id as periode_id','nama', 'slug', 'img', 'namadivisi', 'namasubdivisi', 'namajabatan', 'namaperiode', 'commitees.periode as periode')->join('divisis','divisis.id',"=",'commitees.divisi')->join('subdivisis','subdivisis.id',"=",'commitees.subdivisi')->join('jabatans', 'jabatans.id',"=",'commitees.jabatan')->join('periodes', 'periodes.id',"=",'commitees.periode')->where('divisi', '=', 2)->get();
        $periodeget         = Konfigurasi::select('periodes.id as periode_id', 'namaperiode' ,'pengurus')->join('periodes', 'konfigurasis.pengurus',"=",'periodes.id')->where('konfigurasis.id', '=', 1)->first();
        $konfigurasis       = Konfigurasi::where('konfigurasis.id', '=', 1)->first();
        return Inertia::render('Commitee/ListPengurus', 
            [
                'pengurus' => $pengurus,
                'periodeget' => $periodeget,
                'subdivisi' => $subdivisi,
                'listSub'   => $subdivisi,
                'event' => [
                    'application-name'          => $konfigurasis->namawebsite,
                    'title'                     => 'Dewan Pengurus Asosiasi Pengajar Hukum Adat (APHA) Indonesia',
                    'description'               => $konfigurasis->description,
                    'keywords'                  => $konfigurasis->metatag,
                    'image'                     => 'https://i.imgur.com/R4DyCBa.png',
                    'image_alt'                => 'Dewan Pengurus Asosiasi Pengajar Hukum Adat (APHA) Indonesia',
                    'image_type'                => 'image/jpeg',
                    'image_width'               => '1800',
                    'image_height'              => '550',
                    'og:type'                   => 'website',
                    'url'                       => $konfigurasis->address,
                    'fb:app_id'                 => $konfigurasis->fbid,
                    'theme-color'               => '#ff6300',
                    'mobile-web-app-capable'    => 'yes',
                    'apple-mobile-web-app-title'=> 'Dewan Pengurus Asosiasi Pengajar Hukum Adat (APHA) Indonesia',
                    'card'                      => 'summary_large_image',
                ]
            ]
        );
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
    }

    public function show(Commitee $commitee){
        $konfigurasis           = Konfigurasi::where('konfigurasis.id', '=', 1)->first();
        //$pengurus           = Commitee::select('commitees.id as commitees_id', 'periodes.id as periode_id','nama', 'slug', 'img', 'namadivisi', 'namasubdivisi', 'namajabatan', 'namaperiode', 'commitees.periode as periode')->join('divisis','divisis.id',"=",'commitees.divisi')->join('subdivisis','subdivisis.id',"=",'commitees.subdivisi')->join('jabatans', 'jabatans.id',"=",'commitees.jabatan')->join('periodes', 'periodes.id',"=",'commitees.periode')->where('commites.slug', '=', $commitee->)->get();
        $pengurusget           = Commitee::select('commitees.id as commitees_id', 'subdivisis.id as subdivisi_id', 'nama', 'gender', 'img', 'namadivisi', 'namasubdivisi', 'namajabatan', 'description')->join('divisis','divisis.id',"=",'commitees.divisi')->join('subdivisis','subdivisis.id',"=",'commitees.subdivisi')->join('jabatans', 'jabatans.id',"=",'commitees.jabatan')->join('periodes', 'periodes.id',"=",'commitees.periode')->where('commitees.id', '=', $commitee->id)->first();
        
        // meta
        //Deskripsi
        $repkonten1    = Str::replace('<p>', '', $pengurusget->description);
        $repkonten2    = Str::replace('</p>', '', $repkonten1);
        $des    = Str::words( $repkonten2, 25);
        //metatag
        $reptag1    = Str::replace('<p>', '', $konfigurasis->metatag);
        $metatag    = Str::replace('</p>', '', $reptag1);
        $cururl     = URL::current();

        return Inertia::render('Commitee/Show', [
            
            'commitee' => $pengurusget,
            'event' => [
                'application-name'          => $konfigurasis->namawebsite,
                'title'                     => $pengurusget->nama,
                'description'               => $des,
                'keywords'                  => $metatag,
                'image'                     => 'https://apha.or.id/storage/'.$pengurusget->img,
                'image_type'                => 'image/jpeg',
                'image_width'               => '1800',
                'image_height'              => '550',
                'image_alt'                 => $pengurusget->nama,
                'og:type'                   => 'profile',
                'firstname'        => $pengurusget->nama,
                //'lastname'        => $pengurusget->nama,
                'publish_time'              => $pengurusget->publish_at,
                'article_tag'               => 'Hukum Adat, APHA, Asosisasi Pengajar Hukum Adat',
                'url'                       => $cururl,
                'fb:app_id'                 => $konfigurasis->fbid,
                'theme-color'               => '#ff6300',
                'mobile-web-app-capable'    => 'yes',
                'apple-mobile-web-app-title'=> $pengurusget->nama,
                'card'                      => 'summary_large_image',
            ]
        ]);
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
    }

}
