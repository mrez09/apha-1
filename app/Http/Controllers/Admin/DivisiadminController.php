<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use App\Models\Divisi;
use Inertia\Inertia;
use App\Http\Requests\Admin\Divisi\Store;
use App\Http\Requests\Admin\Divisi\Update;
use Storage;

class DivisiadminController extends Controller
{
    //
    public function index(){
        $divisi           = Divisi::all();
        return Inertia::render('Admin/Divisi/List',
    [
        'divisi'          => $divisi
    ]);
      //return  [
        //    'news'          => $news,
        //];  

    }

    public function create(){
        return Inertia::render('Admin/Divisi/Create');
    }

    public function store(Store $request){
        //return Inertia::render('Admin/News/Create');
        $data = $request->validated();
        //$data['path'] = "/storage/".$data['img'];
        $divisi = Divisi::create($data);

        return redirect(route('admin.dashboard.divisi.index'))->with(
            [
                'message'   => "Divisi Berhasil diUpdate",
                'type'      => "success"
            ]
            );
        //return $request->all();
    }

    public function edit(Divisi $divisi){
        //return $news;
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
        //$news           = News::all();
        return Inertia::render('Admin/Divisi/Edit',
        [
            'divisi'          => $divisi
        ]);
    }

    public function update(Update $request, Divisi $divisi){
        $data = $request->validated();
        
        
        $divisi->update($data);
        return redirect(route('admin.dashboard.divisi.index'))->with(
            [
                'message'   => "Divisi Berhasil diUpdate",
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

    public function destroy(Divisi $divisi){
        $divisi->delete();
        return redirect(route('admin.dashboard.divisi.index'))->with(
            [
                'message'   => "Divisi Berhasil diDelete",
                'type'      => "success"
            ]
            );
        //return $news;
    }
}
