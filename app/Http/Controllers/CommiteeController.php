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
        //$pengurus           = Commitee::select('commitees.id as commitees_id', 'periodes.id as periode_id','nama', 'slug', 'img', 'namadivisi', 'namasubdivisi', 'namajabatan', 'namaperiode', 'commitees.periode as periode')->join('divisis','divisis.id',"=",'commitees.divisi')->join('subdivisis','subdivisis.id',"=",'commitees.subdivisi')->join('jabatans', 'jabatans.id',"=",'commitees.jabatan')->join('periodes', 'periodes.id',"=",'commitees.periode')->where('divisi', '=', 1)->get();
        $pengurus = Commitee::select(
            'commitees.id as commitees_id',
            'periodes.id as periode_id',
            'nama',
            'slug',
            'img',
            'namadivisi',
            'namasubdivisi',
            'namajabatan',
            'namaperiode',
            'commitees.periode as periode'
        )
            ->join('divisis', 'divisis.id', '=', 'commitees.divisi')
            ->join('subdivisis', 'subdivisis.id', '=', 'commitees.subdivisi')
            ->join('jabatans', 'jabatans.id', '=', 'commitees.jabatan')
            ->join('periodes', 'periodes.id', '=', 'commitees.periode')
            ->where('divisi', '=', 1)
            ->orderBy('jabatans.id', 'asc') // <--- tambahkan ini
            ->get();
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
        //$pengurus           = Commitee::select('commitees.id as commitees_id', 'periodes.id as periode_id','nama', 'slug', 'img', 'namadivisi', 'namasubdivisi', 'namajabatan', 'namaperiode', 'commitees.periode as periode')->join('divisis','divisis.id',"=",'commitees.divisi')->join('subdivisis','subdivisis.id',"=",'commitees.subdivisi')->join('jabatans', 'jabatans.id',"=",'commitees.jabatan')->join('periodes', 'periodes.id',"=",'commitees.periode')->where('divisi', '=', 2)->get();
        $pengurus = Commitee::select(
            'commitees.id as commitees_id', 'periodes.id as periode_id',
            'nama',
            'slug',
            'img',
            'namadivisi',
            'namasubdivisi',
            'namajabatan',
            'namaperiode',
            'commitees.periode as periode'
        )
            ->join('divisis', 'divisis.id', '=', 'commitees.divisi')
            ->join('subdivisis', 'subdivisis.id', '=', 'commitees.subdivisi')
            ->join('jabatans', 'jabatans.id', '=', 'commitees.jabatan')
            ->join('periodes', 'periodes.id', '=', 'commitees.periode')
            ->where('divisi', '=', 2)
            ->orderBy('jabatans.id', 'asc') // urut dari jabatan tertinggi ke rendah
            ->get();
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

    public function show(Commitee $commitee)
{
    $konfigurasis = Konfigurasi::find(1);

    // Gunakan leftJoin supaya tetap tampil meski ada data yang null
    $pengurusget = Commitee::select(
        'commitees.id as commitees_id',
        'subdivisis.id as subdivisi_id',
        'commitees.nama',
        'commitees.gender',
        'commitees.img',
        'divisis.namadivisi',
        'subdivisis.namasubdivisi',
        'jabatans.namajabatan',
        'commitees.description',
        'members.scopus as link_scopus',
        'members.scholar as link_scholar',
        'members.sinta as link_sinta'
    )
    ->leftJoin('divisis', 'divisis.id', '=', 'commitees.divisi')
    ->leftJoin('subdivisis', 'subdivisis.id', '=', 'commitees.subdivisi')
    ->leftJoin('jabatans', 'jabatans.id', '=', 'commitees.jabatan')
    ->leftJoin('periodes', 'periodes.id', '=', 'commitees.periode')
    ->leftJoin('members', 'members.id_com', '=', 'commitees.id')
    ->where('commitees.id', '=', $commitee->id)
    ->first();

    // Antisipasi kalau $pengurusget null
    if (!$pengurusget) {
        abort(404, 'Data pengurus tidak ditemukan.');
    }

    // --- Meta section ---
    $descriptionText = $pengurusget->description ?? '';
    $repkonten1 = Str::replace('<p>', '', $descriptionText);
    $repkonten2 = Str::replace('</p>', '', $repkonten1);
    $des = Str::words($repkonten2, 25);

    $reptag1 = Str::replace('<p>', '', $konfigurasis->metatag ?? '');
    $metatag = Str::replace('</p>', '', $reptag1);

    $cururl = URL::current();

    return Inertia::render('Commitee/Show', [
        'commitee' => $pengurusget,
        'event' => [
            'application-name'           => $konfigurasis->namawebsite ?? 'APHA',
            'title'                      => $pengurusget->nama ?? 'Pengurus',
            'description'                => $des,
            'keywords'                   => $metatag,
            'image'                      => $pengurusget->img 
                ? 'https://apha.or.id/storage/' . $pengurusget->img
                : 'https://apha.or.id/default-thumbnail.jpg',
            'image_type'                 => 'image/jpeg',
            'image_width'                => '1800',
            'image_height'               => '550',
            'image_alt'                  => $pengurusget->nama ?? '',
            'og:type'                    => 'profile',
            'firstname'                  => $pengurusget->nama ?? '',
            'publish_time'               => $pengurusget->publish_at ?? now(),
            'article_tag'                => 'Hukum Adat, APHA, Asosiasi Pengajar Hukum Adat',
            'url'                        => $cururl,
            'fb:app_id'                  => $konfigurasis->fbid ?? '',
            'theme-color'                => '#ff6300',
            'mobile-web-app-capable'     => 'yes',
            'apple-mobile-web-app-title' => $pengurusget->nama ?? '',
            'card'                       => 'summary_large_image',
        ]
    ]);
}

}
