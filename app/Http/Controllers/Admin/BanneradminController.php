<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\Galeri;
use Inertia\Inertia;
use App\Http\Requests\Admin\Banner\Store;
use App\Http\Requests\Admin\Banner\Update;
use Storage;

class BanneradminController extends Controller
{
    //
    public function index(){
        //$galeri          = Galeri::all();
        $galeri          = Galeri::whereCategory("Banner")->get();
        return Inertia::render('Admin/Banner/List',
    [
        'galeri'          => $galeri
    ]);
      //return  [
        //    'news'          => $news,
        //];  

    }

    public function create(){
        return Inertia::render('Admin/Banner/Create');
    }

    public function store(Store $request){
        //return Inertia::render('Admin/News/Create');
        $data = $request->validated();
        $data['img'] = Storage::disk("public")->put('galeri', $request->file('img'));
        //$data['path'] = "/storage/".$data['img'];
        //$data['slug'] = $request->file('img');
        $data['enk'] = Hash::make($data ['name']);
        $data['slug'] = Str::slug($data ['enk']);
        $data['category'] = "Banner";
        $data['decription'] = $data ['konten'];

        //$data['id_user'] = Auth::id();
        $galeri = Galeri::create($data);

        return redirect(route('admin.dashboard.banner.index'))->with(
            [
                'message'   => "Banner Berhasil diSimpan",
                'type'      => "success"
            ]
            );
        //return $request->all();
    }

    public function edit(Galeri $galeri){
        //return $news;
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
        //$news           = News::all();
        return Inertia::render('Admin/Galeri/Edit',
        [
            'galeri'          => $galeri
        ]);
    }

    public function update(Update $request, Galeri $galeri){
        $data = $request->validated();
        $data['enk'] = Hash::make($data ['name']);
        $data['slug'] = Str::slug($data ['enk']);
        if($request->file('img')){
            $data['img'] = Storage::disk("public")->put('galeri', $request->file('img'));
            Storage::disk("public")->delete($galeri->img);
        } else {
            $data['img'] = $galeri->img;
        }

        $galeri->update($data);
        return redirect(route('admin.dashboard.galeri.index'))->with(
            [
                'message'   => "Photo Berhasil diUpdate",
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

    public function destroy(Galeri $galeri){
        $galeri->delete();
        return redirect(route('admin.dashboard.galeri.index'))->with(
            [
                'message'   => "Photo Berhasil diHapus",
                'type'      => "success"
            ]
            );
        //return $news;
    }
}
