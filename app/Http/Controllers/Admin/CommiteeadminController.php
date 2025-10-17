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
use App\Http\Requests\Admin\Commitee\Store;
use App\Http\Requests\Admin\Commitee\Update;
use Storage;

class CommiteeadminController extends Controller
{
    //
    public function index(){
        //$pengurus           = Pengurus::all();
        //dipake
        //$pengurus           = Divisi::join('subdivisis','subdivisis.id_divisi',"=",'divisis.id')->join('jabatans', 'jabatans.id_subdivisi',"=",'subdivisis.id')->join('commitees', 'commitees.jabatan',"=",'jabatans.id')->join('periodes', 'periodes.id',"=",'commitees.periode')->get();
        //dipake $pengurus           = Divisi::select('commitees.id as commitees_id','nama', 'img', 'namadivisi', 'namasubdivisi', 'namajabatan')->join('subdivisis','subdivisis.id_divisi',"=",'divisis.id')->join('jabatans', 'jabatans.id_subdivisi',"=",'subdivisis.id')->join('commitees', 'commitees.jabatan',"=",'jabatans.id')->join('periodes', 'periodes.id',"=",'commitees.periode')->get();
        //rubah 1$pengurus           = Divisi::select('commitees.id as commitees_id','nama', 'img', 'namadivisi', 'namasubdivisi', 'namajabatan')->join('subdivisis','subdivisis.id_divisi',"=",'divisis.id')->join('commitees', 'commitees.subdivisi',"=",'subdivisis.id')->join('jabatans', 'jabatans.id_subdivisi',"=",'subdivisis.id')->join('periodes', 'periodes.id',"=",'commitees.periode')->get();
        $pengurus           = Commitee::select('commitees.id as commitees_id','nama', 'img', 'namadivisi', 'namasubdivisi', 'namajabatan')->join('divisis','divisis.id',"=",'commitees.divisi')->join('subdivisis','subdivisis.id',"=",'commitees.subdivisi')->join('jabatans', 'jabatans.id',"=",'commitees.jabatan')->join('periodes', 'periodes.id',"=",'commitees.periode')->get();
        //$newsjoin           = News::select('news.id as link_id','judul', 'view', 'namakategori', 'img', 'name', 'newscategories.id as id_cat')->join('users','users.id',"=",'news.id_user')->join('newscategories','newscategories.id',"=",'news.category')->get();
        $konfigurasi           = Konfigurasi::where('konfigurasis.id', '=', 1)->first();

        //ga dipake id subdivisi    //
    //$jabatan           = Subdivisi::join('jabatans','jabatans.id_subdivisi',"=",'subdivisis.id')->join('divisis','divisis.id',"=",'subdivisis.id_divisi')->get();
    //id divisi    
    //$jabatan           = Jabatan::join('subdivisis','subdivisis.id',"=",'jabatans.id')->join('divisis','divisis.id',"=",'subdivisis.id_divisi')->get();
        //$jabatan           = Divisi::join('subdivisis','subdivisis.id',"=",'jabatans.id')->join('divisis','divisis.id',"=",'subdivisis.id_divisi')->get();
        
        return Inertia::render('Admin/Pengurus/List',
        [
            'pengurus'          => $pengurus,
            'konfigurasi'          => $konfigurasi,
        ]);
    }

    public function create(){
        $category           = Category::all();
        $divisiall           = Divisi::all();
        $subdivisiall           = Subdivisi::all();
        $jabatanall           = Jabatan::all();
        $periode           = Periode::all();
        //$jdsj           = Divisi::join('subdivisis','subdivisis.id_divisi',"=",'divisis.id')->join('jabatans', 'jabatans.id_subdivisi',"=",'subdivisis.id')->join('penguruses', 'penguruses.jabatan',"=",'jabatans.id')->join('periodes', 'periodes.id',"=",'penguruses.periode')->get();
        return Inertia::render('Admin/Pengurus/Create',
        [
            //'jdsj'          => $jdsj,
            'divisiall'          => $divisiall,
            'subdivisiall'          => $subdivisiall,
            'jabatanall'          => $jabatanall,
            'category'          => $category,
            'periode'          => $periode,
        ]);
    }

    public function store(Store $request){
        //return Inertia::render('Admin/News/Create');
        $data = $request->validated();
        if($data['img'] != ''){
            $data['img'] = Storage::disk("public")->put('committe', $request->file('img'));
        }
       
        //$data['path'] = "/storage/".$data['img'];
        $data['slug'] = Str::slug($data['nama']);
        //$data['id_user'] = Auth::id();
        $commitee = Commitee::create($data);

        return redirect(route('admin.dashboard.commitee.index'))->with(
            [
                'message'   => "Anggota Pengurus Berhasil diTambah",
                'type'      => "success"
            ]
            );
//        return $request->all();
    }

    public function edit(Commitee $commitee){
        //return $news;
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
        //$news           = News::all();
        $divisiall           = Divisi::all();
        $divisicom           = Divisi::where('id', '=', 1)->get();
        
        $subdivisiall           = Subdivisi::all();
        $jabatanall           = Jabatan::all();
        $periode           = Periode::all();
        $pengurusget           = Commitee::select('commitees.id as commitees_id','nama', 'img', 'namadivisi', 'namasubdivisi', 'namajabatan', 'namaperiode')->join('divisis','divisis.id',"=",'commitees.divisi')->join('subdivisis','subdivisis.id',"=",'commitees.subdivisi')->join('jabatans', 'jabatans.id',"=",'commitees.jabatan')->join('periodes', 'periodes.id',"=",'commitees.periode')->where('commitees.id', '=', $commitee->id)->first();

        $listdivisi           = Divisi::all();
        $subdivisiall           = Subdivisi::all();
        return Inertia::render('Admin/Pengurus/Edit',
        [
            'commitee'          => $commitee,
            'listdivisi'        => $listdivisi,
            'pengurusget'        => $pengurusget,
            'divisiall'        => $divisiall,
            'subdivisiall'      => $subdivisiall,
            'jabatanall'      => $jabatanall,
            'periode'      => $periode,
        ]);
    }

    public function update(Update $request, Commitee $commitee){
        $data = $request->validated();
        
        if($request->file('img')){
            $data['img'] = Storage::disk("public")->put('commitee', $request->file('img'));
            Storage::disk("public")->delete($commitee->img);
        } else {
            $data['img'] = $commitee->img;
        }
        $data['slug'] = Str::slug($data['nama']);
        //$path = Storage::url('public');

        //$img = '<img src"' .$path.'" alt=""/>';

        $commitee->update($data);
        return redirect(route('admin.dashboard.commitee.index'))->with(
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

    public function destroy(Commitee $commitee){
        $commitee->delete();
        return redirect(route('admin.dashboard.commitee.index'))->with(
            [
                'message'   => "Pengurus Berhasil diDelete",
                'type'      => "success"
            ]
            );
        //return $news;
    }

    
}
