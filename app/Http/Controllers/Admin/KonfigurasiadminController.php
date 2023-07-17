<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use App\Models\Commitee;
use App\Models\Jabatan;
use App\Models\Subdivisi;
use App\Models\Divisi;
use App\Models\Periode;
use App\Models\Category;
use App\Models\Konfigurasi;
use Inertia\Inertia;
use App\Http\Requests\Admin\Konfigurasi\Store;
use App\Http\Requests\Admin\Konfigurasi\Update;
use Storage;

class KonfigurasiadminController extends Controller
{
    //
    public function index(){
        //$pengurus           = Pengurus::all();
        //dipake
        //$pengurus           = Divisi::join('subdivisis','subdivisis.id_divisi',"=",'divisis.id')->join('jabatans', 'jabatans.id_subdivisi',"=",'subdivisis.id')->join('commitees', 'commitees.jabatan',"=",'jabatans.id')->join('periodes', 'periodes.id',"=",'commitees.periode')->get();
        //dipake $pengurus           = Divisi::select('commitees.id as commitees_id','nama', 'img', 'namadivisi', 'namasubdivisi', 'namajabatan')->join('subdivisis','subdivisis.id_divisi',"=",'divisis.id')->join('jabatans', 'jabatans.id_subdivisi',"=",'subdivisis.id')->join('commitees', 'commitees.jabatan',"=",'jabatans.id')->join('periodes', 'periodes.id',"=",'commitees.periode')->get();
        //rubah 1$pengurus           = Divisi::select('commitees.id as commitees_id','nama', 'img', 'namadivisi', 'namasubdivisi', 'namajabatan')->join('subdivisis','subdivisis.id_divisi',"=",'divisis.id')->join('commitees', 'commitees.subdivisi',"=",'subdivisis.id')->join('jabatans', 'jabatans.id_subdivisi',"=",'subdivisis.id')->join('periodes', 'periodes.id',"=",'commitees.periode')->get();
     //   $pengurus           = Commitee::select('commitees.id as commitees_id','nama', 'img', 'namadivisi', 'namasubdivisi', 'namajabatan')->join('divisis','divisis.id',"=",'commitees.divisi')->join('subdivisis','subdivisis.id',"=",'commitees.subdivisi')->join('jabatans', 'jabatans.id',"=",'commitees.jabatan')->join('periodes', 'periodes.id',"=",'commitees.periode')->get();
        //$newsjoin           = News::select('news.id as link_id','judul', 'view', 'namakategori', 'img', 'name', 'newscategories.id as id_cat')->join('users','users.id',"=",'news.id_user')->join('newscategories','newscategories.id',"=",'news.category')->get();
        $konfigurasi           = Konfigurasi::where('konfigurasis.id', '=', 1)->first();

        //ga dipake id subdivisi    //
    //$jabatan           = Subdivisi::join('jabatans','jabatans.id_subdivisi',"=",'subdivisis.id')->join('divisis','divisis.id',"=",'subdivisis.id_divisi')->get();
    //id divisi    
    //$jabatan           = Jabatan::join('subdivisis','subdivisis.id',"=",'jabatans.id')->join('divisis','divisis.id',"=",'subdivisis.id_divisi')->get();
        //$jabatan           = Divisi::join('subdivisis','subdivisis.id',"=",'jabatans.id')->join('divisis','divisis.id',"=",'subdivisis.id_divisi')->get();
        
        return Inertia::render('Admin/Konfigurasi/List',
        [
            //'pengurus'          => $pengurus,
            'konfigurasi'          => $konfigurasi,
        ]);
    }

    public function editpengurus(Konfigurasi $konfigurasi){
        //return $news;
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
        //$news           = News::all();
        $divisiall           = Divisi::all();
        $divisicom           = Divisi::where('id', '=', 1)->get();
        
        $subdivisiall           = Subdivisi::all();
        $jabatanall           = Jabatan::all();
        $periode           = Periode::all();
        //$pengurusget           = Commitee::select('commitees.id as commitees_id','nama', 'img', 'namadivisi', 'namasubdivisi', 'namajabatan')->join('divisis','divisis.id',"=",'commitees.divisi')->join('subdivisis','subdivisis.id',"=",'commitees.subdivisi')->join('jabatans', 'jabatans.id',"=",'commitees.jabatan')->join('periodes', 'periodes.id',"=",'commitees.periode')->where('commitees.id', '=', $commitee->id)->first();

        $listdivisi           = Divisi::all();
        $subdivisiall           = Subdivisi::all();
        $konfigurasis           = Konfigurasi::where('konfigurasis.id', '=', 1)->first();
        $periodeget           = Konfigurasi::where('konfigurasis.slug', '=', $konfigurasi->slug)->first();
        return Inertia::render('Admin/Konfigurasi/Pengurus',
        [
            'konfigurasi'          => $konfigurasi,
            'listdivisi'        => $listdivisi,
            //'pengurusget'        => $pengurusget,
            'divisiall'        => $divisiall,
            'subdivisiall'      => $subdivisiall,
            'jabatanall'      => $jabatanall,
            'periode'      => $periode,
            'periodeget'      => $periodeget,
        ]);
    }

    public function edit(Konfigurasi $konfigurasi){
        //return $news;
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
        //$news           = News::all();
        $divisiall           = Divisi::all();
        $divisicom           = Divisi::where('id', '=', 1)->get();
        
        $subdivisiall           = Subdivisi::all();
        $jabatanall           = Jabatan::all();
        $periode           = Periode::all();
        //$pengurusget           = Commitee::select('commitees.id as commitees_id','nama', 'img', 'namadivisi', 'namasubdivisi', 'namajabatan')->join('divisis','divisis.id',"=",'commitees.divisi')->join('subdivisis','subdivisis.id',"=",'commitees.subdivisi')->join('jabatans', 'jabatans.id',"=",'commitees.jabatan')->join('periodes', 'periodes.id',"=",'commitees.periode')->where('commitees.id', '=', $commitee->id)->first();

        $listdivisi           = Divisi::all();
        $subdivisiall           = Subdivisi::all();
        $konfigurasis           = Konfigurasi::where('konfigurasis.id', '=', 1)->first();
        $periodeget           = Konfigurasi::where('konfigurasis.slug', '=', $konfigurasi->slug)->first();
        return Inertia::render('Admin/Konfigurasi/Website',
        [
            'konfigurasi'          => $konfigurasi,
            'listdivisi'        => $listdivisi,
            //'pengurusget'        => $pengurusget,
            'divisiall'        => $divisiall,
            'subdivisiall'      => $subdivisiall,
            'jabatanall'      => $jabatanall,
            'periode'      => $periode,
            'periodeget'      => $periodeget,
        ]);
    }

    public function update(Update $request, Konfigurasi $konfigurasi){
        $data = $request->validated();
        
        if($request->file('img')){
            $data['img'] = Storage::disk("public")->put('logo', $request->file('img'));
            Storage::disk("public")->delete($konfigurasi->img);
        } else {
            $data['img'] = $konfigurasi->img;
        }
        $data['slug'] = Str::slug($data['namawebsite']);
        //$path = Storage::url('public');

        //$img = '<img src"' .$path.'" alt=""/>';

        $konfigurasi->update($data);
        return redirect(route("admin.dashboard.konfigurasi.edit",
        $konfigurasi->slug))->with(
            [
                'message'   => "Berita Berhasil diUpdate",
                'type'      => "success"
            ]
            );
        
        
  //      return $request->all();
        //return $news;
        //return Inertia::render('Admin/News/Create');
        
        //$news           = News::all();
        //return Inertia::render('Admin/News/Edit',
        //[
          //  'news'          => $news
        //]);
    }

    public function updatepengurus(Update $request, Konfigurasi $konfigurasi){
        $data = $request->validated();
        
//        if($request->file('img')){
  //          $data['img'] = Storage::disk("public")->put('logo', $request->file('img'));
    //        Storage::disk("public")->delete($konfigurasi->img);
//        } else {
  //          $data['img'] = $konfigurasi->img;
 //       }
   //     $data['slug'] = Str::slug($data['namawebsite']);
        //$path = Storage::url('public');

        //$img = '<img src"' .$path.'" alt=""/>';

        $konfigurasi->update($data);
        return redirect(route("admin.dashboard.konfigurasi.pengurus.edit",
        $konfigurasi->slug))->with(
            [
                'message'   => "Berita Berhasil diUpdate",
                'type'      => "success"
            ]
            );
        
        
        //return $request->all();
        //return $news;
        //return Inertia::render('Admin/News/Create');
        
        //$news           = News::all();
        //return Inertia::render('Admin/News/Edit',
        //[
          //  'news'          => $news
        //]);
    }

}
