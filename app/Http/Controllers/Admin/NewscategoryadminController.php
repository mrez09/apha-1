<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use App\Models\Newscategory;
use Inertia\Inertia;
use App\Http\Requests\Admin\Categoryberita\Store;
use App\Http\Requests\Admin\Categoryberita\Update;
use Storage;

class NewscategoryadminController extends Controller
{
    //
    public function index(){
        $newscategory           = Newscategory::all();
        return Inertia::render('Admin/Newscategory/List',
        [
            'newscategory'          => $newscategory
        ]);
      //return  [
        //    'news'          => $news,
        //];  

    }

    public function create(){
        return Inertia::render('Admin/Newscategory/Create');
    }

    public function store(Store $request){
        //return Inertia::render('Admin/News/Create');
        $data = $request->validated();
//        $data['img'] = Storage::disk("public")->put('news', $request->file('img'));
        //$data['path'] = "/storage/".$data['img'];
        $data['slug'] = Str::slug($data ['namakategori']);
  //      $data['id_user'] = Auth::id();
        $newscategory = Newscategory::create($data);

        return redirect(route('admin.dashboard.newscategory.index'))->with(
            [
                'message'   => "Kategori Berita Berhasil diTambah",
                'type'      => "success"
            ]
            );
        //return $request->all();
    }

    public function show(Newscategory $newscategory){
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
    }

    public function edit(Newscategory $newscategory){
        //return $news;
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
        //$news           = News::all();
        return Inertia::render('Admin/Newscategory/Edit',
        [
            'newscategory'          => $newscategory
        ]);
    }

    public function update(Update $request, Newscategory $newscategory){
        $data = $request->validated();
        $data['slug'] = Str::slug($data ['namakategori']);
        
        //$path = Storage::url('public');

        //$img = '<img src"' .$path.'" alt=""/>';

        $newscategory->update($data);
        return redirect(route('admin.dashboard.newscategory.index'))->with(
            [
                'message'   => "Kategori Berita Berhasil diUpdate",
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

    public function destroy(Newscategory $newscategory){
        $newscategory->delete();
        return redirect(route('admin.dashboard.newscategory.index'))->with(
            [
                'message'   => "Kategori Berita Berhasil diDelete",
                'type'      => "success"
            ]
            );
        //return $news;
    }
}
