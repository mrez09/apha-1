<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use App\Models\News;
use Inertia\Inertia;
use App\Http\Requests\Admin\News\Store;
use App\Http\Requests\Admin\News\Update;
use Storage;

class NewsadminController extends Controller
{
    //
    public function index(){
        $news           = News::all();
        return Inertia::render('Admin/News/List',
    [
        'news'          => $news
    ]);
      //return  [
        //    'news'          => $news,
        //];  

    }

    public function create(){
        return Inertia::render('Admin/News/Create');
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

    public function edit(News $news){
        //return $news;
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
        //$news           = News::all();
        return Inertia::render('Admin/News/Edit',
        [
            'news'          => $news
        ]);
    }

    public function update(Update $request, News $news){
        $data = $request->validated();
        if($request->file('img')){
            $data['img'] = Storage::disk("public")->put('news', $request->file('img'));
            Storage::disk("public")->delete($news->img);
        } else {
            $data['img'] = $news->img;
        }

        $news->update($data);
        return redirect(route('admin.dashboard.news.index'))->with(
            [
                'message'   => "Berita Berhasil diUpdate",
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

    public function destroy(News $news){
        $news->delete();
        return redirect(route('admin.dashboard.news.index'))->with(
            [
                'message'   => "Berita Berhasil diDelete",
                'type'      => "success"
            ]
            );
        //return $news;
    }

        

}
