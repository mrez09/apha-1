<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Commitee;
use App\Models\Konfigurasi;

class CommiteeController extends Controller
{
    //

    public function dewanpembina(){
        //$news->increment('view');
        //$newsjoin           = News::findOrFail($news);
        //$newsjoin           = News::select('news.id as link_id','judul', 'view', 'namakategori', 'img', 'name', 'newscategories.id as id_cat')->join('users','users.id',"=",'news.id_user')->join('newscategories','newscategories.id',"=",'news.category')->where('news.slug', $news->slug)->get();
        //$newsjoin           = News::select('news.id as link_id','judul', 'view', 'namakategori', 'img', 'name', 'newscategories.id as id_cat')->join('users','users.id',"=",'news.id_user')->join('newscategories','newscategories.id',"=",'news.category')->where('news.slug', $news->slug)->find($news->id);
        
        $konfigurasi        = Konfigurasi::all();
        $pengurus           = Commitee::select('commitees.id as commitees_id', 'periodes.id as periode_id','nama', 'img', 'namadivisi', 'namasubdivisi', 'namajabatan', 'namaperiode', 'commitees.periode as periode')->join('divisis','divisis.id',"=",'commitees.divisi')->join('subdivisis','subdivisis.id',"=",'commitees.subdivisi')->join('jabatans', 'jabatans.id',"=",'commitees.jabatan')->join('periodes', 'periodes.id',"=",'commitees.periode')->get();
        $periodeget           = Konfigurasi::select('periodes.id as periode_id', 'namaperiode' ,'pengurus')->join('periodes', 'konfigurasis.pengurus',"=",'periodes.id')->where('konfigurasis.id', '=', 1)->first();
        return Inertia::render('Commitee/ListPembina', 
            [
                'pengurus' => $pengurus,
                'periodeget' => $periodeget,
            ]
        );
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
    }

    public function show(Commitee $commitee){
        return Inertia::render('Commitee/Show', ['commitee' => $commitee]);
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
    }

}
