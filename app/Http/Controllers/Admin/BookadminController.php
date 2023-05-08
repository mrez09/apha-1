<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use App\Models\Buku;
use Inertia\Inertia;
use App\Http\Requests\Admin\Book\Store;
use App\Http\Requests\Admin\Book\Update;
use Storage;

class BookadminController extends Controller
{
    //
    public function index(){
        $buku          = Buku::all();
        return Inertia::render('Admin/Book/List',
    [
        'buku'          => $buku
    ]);
      //return  [
        //    'news'          => $news,
        //];  

    }

    public function create(){
        return Inertia::render('Admin/Book/Create');
    }

    public function store(Store $request){
        //return Inertia::render('Admin/News/Create');
        $data = $request->validated();
        $data['thumbnail'] = Storage::disk("public")->put('news', $request->file('img'));
        //$data['path'] = "/storage/".$data['img'];
        $data['slug'] = Str::slug($data ['name']);
        $data['decription'] = $data ['konten'];
        //$data['id_user'] = Auth::id();
        $buku = Buku::create($data);

        return redirect(route('admin.dashboard.book.index'))->with(
            [
                'message'   => "Buku Berhasil diUpdate",
                'type'      => "success"
            ]
            );
        //return $request->all();
    }

    public function show(Buku $buku){
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
    }

    public function edit(Buku $buku){
        //return $news;
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
        //$news           = News::all();
        return Inertia::render('Admin/Book/Edit',
        [
            'buku'          => $buku
        ]);
    }

    public function update(Update $request, Buku $buku){
        $data = $request->validated();
        $data['decription'] = $data['konten'];
        $data['slug'] = Str::slug($data ['name']);
        if($request->file('img')){
            $data['thumbnail'] = Storage::disk("public")->put('buku', $request->file('img'));
            //Storage::disk("public")->delete($buku->img);
        } else {
            $data['img'] = $buku->img;
        }

        
        $buku->update($data);
        return redirect(route('admin.dashboard.buku.index'))->with(
            [
                'message'   => "Buku Berhasil diUpdate",
                'type'      => "success"
            ]
            );
        
        
        //kreturn $update->all();
        //return $news;
        //return Inertia::render('Admin/News/Create');
        
        //$news           = News::all();
        //return Inertia::render('Admin/News/Edit',
        //[
          //  'news'          => $news
        //]);
    }

    public function destroy(Buku $buku){
        $buku->delete();
        return redirect(route('admin.dashboard.buku.index'))->with(
            [
                'message'   => "Buku Berhasil diDelete",
                'type'      => "success"
            ]
            );
        //return $news;
    }

        

}
