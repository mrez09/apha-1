<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ErrorpageadminController extends Controller
{
    //
    public function maintenance(){
        //$pengurus           = Pengurus::all();
        //dipake
        //$pengurus           = Divisi::join('subdivisis','subdivisis.id_divisi',"=",'divisis.id')->join('jabatans', 'jabatans.id_subdivisi',"=",'subdivisis.id')->join('commitees', 'commitees.jabatan',"=",'jabatans.id')->join('periodes', 'periodes.id',"=",'commitees.periode')->get();
        //dipake $pengurus           = Divisi::select('commitees.id as commitees_id','nama', 'img', 'namadivisi', 'namasubdivisi', 'namajabatan')->join('subdivisis','subdivisis.id_divisi',"=",'divisis.id')->join('jabatans', 'jabatans.id_subdivisi',"=",'subdivisis.id')->join('commitees', 'commitees.jabatan',"=",'jabatans.id')->join('periodes', 'periodes.id',"=",'commitees.periode')->get();
        //rubah 1$pengurus           = Divisi::select('commitees.id as commitees_id','nama', 'img', 'namadivisi', 'namasubdivisi', 'namajabatan')->join('subdivisis','subdivisis.id_divisi',"=",'divisis.id')->join('commitees', 'commitees.subdivisi',"=",'subdivisis.id')->join('jabatans', 'jabatans.id_subdivisi',"=",'subdivisis.id')->join('periodes', 'periodes.id',"=",'commitees.periode')->get();
     //   $pengurus           = Commitee::select('commitees.id as commitees_id','nama', 'img', 'namadivisi', 'namasubdivisi', 'namajabatan')->join('divisis','divisis.id',"=",'commitees.divisi')->join('subdivisis','subdivisis.id',"=",'commitees.subdivisi')->join('jabatans', 'jabatans.id',"=",'commitees.jabatan')->join('periodes', 'periodes.id',"=",'commitees.periode')->get();
        //$newsjoin           = News::select('news.id as link_id','judul', 'view', 'namakategori', 'img', 'name', 'newscategories.id as id_cat')->join('users','users.id',"=",'news.id_user')->join('newscategories','newscategories.id',"=",'news.category')->get();
        //$konfigurasi           = Konfigurasi::where('konfigurasis.id', '=', 1)->first();

        //ga dipake id subdivisi    //
    //$jabatan           = Subdivisi::join('jabatans','jabatans.id_subdivisi',"=",'subdivisis.id')->join('divisis','divisis.id',"=",'subdivisis.id_divisi')->get();
    //id divisi    
    //$jabatan           = Jabatan::join('subdivisis','subdivisis.id',"=",'jabatans.id')->join('divisis','divisis.id',"=",'subdivisis.id_divisi')->get();
        //$jabatan           = Divisi::join('subdivisis','subdivisis.id',"=",'jabatans.id')->join('divisis','divisis.id',"=",'subdivisis.id_divisi')->get();
        
        return Inertia::render('Admin/ErrorPage/Maintenance',
        [
            //'pengurus'          => $pengurus,
            //'konfigurasi'          => $konfigurasi,
        ]);
    }
}
