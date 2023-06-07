<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use App\Models\Pengurus;
use App\Models\Jabatan;
use App\Models\Subdivisi;
use App\Models\Divisi;
use Inertia\Inertia;
use App\Http\Requests\Admin\Pengurus\Store;
use App\Http\Requests\Admin\Pengurus\Update;
use Storage;

class PengurusadminController extends Controller
{
    //
    public function index(){
        //$pengurus           = Pengurus::all();
        $pengurus           = Divisi::join('subdivisis','subdivisis.id_divisi',"=",'divisis.id')->join('jabatans', 'jabatans.id_subdivisi',"=",'subdivisis.id')->join('penguruses', 'penguruses.jabatan',"=",'jabatans.id')->join('periodes', 'periodes.id',"=",'penguruses.periode')->get();
    //id subdivisi    //
    //$jabatan           = Subdivisi::join('jabatans','jabatans.id_subdivisi',"=",'subdivisis.id')->join('divisis','divisis.id',"=",'subdivisis.id_divisi')->get();
    //id divisi    
    //$jabatan           = Jabatan::join('subdivisis','subdivisis.id',"=",'jabatans.id')->join('divisis','divisis.id',"=",'subdivisis.id_divisi')->get();
        //$jabatan           = Divisi::join('subdivisis','subdivisis.id',"=",'jabatans.id')->join('divisis','divisis.id',"=",'subdivisis.id_divisi')->get();
        
        return Inertia::render('Admin/Pengurus/List',
    [
        'pengurus'          => $pengurus
    ]);
    }

    public function create(){
        $pengurus           = Divisi::join('subdivisis','subdivisis.id_divisi',"=",'divisis.id')->join('jabatans', 'jabatans.id_subdivisi',"=",'subdivisis.id')->join('penguruses', 'penguruses.jabatan',"=",'jabatans.id')->join('periodes', 'periodes.id',"=",'penguruses.periode')->get();
        return Inertia::render('Admin/Pengurus/Create',
    [
        'pengurus'          => $pengurus
    ]);
    }

    public function store(Store $request){
        //return Inertia::render('Admin/News/Create');
        $data = $request->validated();
        $data['img'] = Storage::disk("public")->put('news', $request->file('img'));
        //$data['path'] = "/storage/".$data['img'];
        $data['slug'] = Str::slug($data ['judul']);
        $data['id_user'] = Auth::id();
        $news = News::create($data);

        return redirect(route('admin.dashboard.news.index'))->with(
            [
                'message'   => "Berita Berhasil diUpdate",
                'type'      => "success"
            ]
            );
        //return $request->all();
    }

    public function show(News $news){
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
    }

    public function edit(Pengurus $pengurus){
        //return $news;
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
        //$news           = News::all();
        $listdivisi           = Divisi::all();
        $subdivisiall           = Subdivisi::all();
        return Inertia::render('Admin/Pengurus/Edit',
        [
            'pengurus'          => $pengurus,
            'listdivisi'        => $listdivisi,
            'subdivisiall'      => $subdivisiall
        ]);
    }
}
