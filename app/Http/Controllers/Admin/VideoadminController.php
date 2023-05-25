<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\Video;
use Inertia\Inertia;
use App\Http\Requests\Admin\Video\Store;
use App\Http\Requests\Admin\Video\Update;
use Storage;

class VideoadminController extends Controller
{
    //
    public function index(){
        //$galeri          = Galeri::all();
        $galeri          = Video::whereCategory("Video")->get();
        return Inertia::render('Admin/Video/List',
    [
        'video'          => $galeri
    ]);
      //return  [
        //    'news'          => $news,
        //];  

    }

    public function create(){
        return Inertia::render('Admin/Video/Create');
    }

    public function store(Store $request){
        //return Inertia::render('Admin/News/Create');
        $data = $request->validated();
//        $data['img'] = Storage::disk("public")->put('video', $request->file('img'));
        //$data['path'] = "/storage/".$data['img'];
        //$data['slug'] = $request->file('img');
        //$data['enk'] = Hash::make($data ['name']);
        $data['slug'] = Str::slug($data ['name']);
        $data['category'] = "Video";
        $data['decription'] = $data ['konten'];

        //$data['id_user'] = Auth::id();
        $video = Video::create($data);

        return redirect(route('admin.dashboard.video.index'))->with(
            [
                'message'   => "Video Berhasil diSimpan",
                'type'      => "success"
            ]
            );
        //return $request->all();
    }

    public function edit(Video $video){
        //return $news;
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
        //$news           = News::all();
        return Inertia::render('Admin/Video/Edit',
        [
            'video'          => $video
        ]);
    }

    public function update(Update $request, Video $video){
        $data = $request->validated();
//        $data['enk'] = Hash::make($data ['name']);
        $data['slug'] = Str::slug($data ['name']);
//        if($request->file('img')){
  //          $data['img'] = Storage::disk("public")->put('galeri', $request->file('img'));
    //        Storage::disk("public")->delete($galeri->img);
//        } else {
  //          $data['img'] = $galeri->img;
    //    }

        $video->update($data);
        return redirect(route('admin.dashboard.video.index'))->with(
            [
                'message'   => "Video Berhasil diUpdate",
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

    public function show(Galeri $galeri){
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
        return Inertia::render('Admin/Galeri/Edit',
        [
            'galeri'          => $galeri
        ]);
    }
}
