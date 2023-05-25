<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\Subdivisi;
use App\Models\Divisi;
use Inertia\Inertia;
use App\Http\Requests\Admin\Subdivisi\Store;
use App\Http\Requests\Admin\Subdivisi\Update;
use Storage;

class SubdivisiadminController extends Controller
{
    //
    //
    public function index(){
        //whereIsFeatured(true)->whereCategory("Banner")->get()
        //$subdivisi           = Subdivisi::all();
        //$subdivisi           = Subdivisi::join('divisis','divisis.id',"=",'subdivisis.id_divisi')->get();
        $subdivisi           = Divisi::join('subdivisis','subdivisis.id_divisi',"=",'divisis.id')->get();
        
        return Inertia::render('Admin/Subdivisi/List',
    [
        'subdivisi'          => $subdivisi
    ]);
      //return  [
        //    'news'          => $news,
        //];  

    }
    public function create(){
        $subdivisi           = Divisi::all();
        return Inertia::render('Admin/Subdivisi/Create',
    [
        'subdivisi'          => $subdivisi
    ]);
    }

    public function store(Store $request){
        //return Inertia::render('Admin/News/Create');
        $data = $request->validated();
        //$data['path'] = "/storage/".$data['img'];
        $data['id_divisi'] = $request['id_divisi'];
        $subdivisi = Subdivisi::create($data);

        return redirect(route('admin.dashboard.subdivisi.index'))->with(
            [
                'message'   => "Sub Divisi Berhasil diUpdate",
                'type'      => "success"
            ]
            );
        //return $request->all();
    }

    public function edit(Subdivisi $subdivisi){
        //return $news;
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
        //$news           = News::all();
        $listdivisi           = Divisi::all();
        $subdivisiall           = Subdivisi::all();
        return Inertia::render('Admin/Subdivisi/Edit',
        [
            'listdivisi'          => $listdivisi,
            'subdivisi'          => $subdivisi,
            'subdivisiall'          => $subdivisiall
        ]);
    }

    public function update(Update $request, Subdivisi $subdivisi){
        $data = $request->validated();
        
        
        $subdivisi->update($data);
        return redirect(route('admin.dashboard.subdivisi.index'))->with(
            [
                'message'   => "Sub Divisi Berhasil diUpdate",
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

    public function show(Divisi $divisi){
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
    }

    public function destroy(Subdivisi $subdivisi){
        $subdivisi->delete();
        return redirect(route('admin.dashboard.subdivisi.index'))->with(
            [
                'message'   => "Sub Divisi Berhasil diDelete",
                'type'      => "success"
            ]
            );
        //return $news;
    }
}
