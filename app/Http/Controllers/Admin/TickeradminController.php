<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use App\Models\News;
use App\Models\Newscategory;
use Inertia\Inertia;
use App\Http\Requests\Admin\News\Store;
use App\Http\Requests\Admin\News\Update;
use Storage;

class TickeradminController extends Controller
{
    //
    public function index(){
        $news           = News::all();
        $newsjoin           = News::select('news.id as link_id','judul', 'view', 'namakategori', 'img', 'name', 'newscategories.id as id_cat')->join('users','users.id',"=",'news.id_user')->join('newscategories','newscategories.id',"=",'news.category')->get();
        return Inertia::render('Admin/News/List',
        [
            'news'          => $newsjoin
        ]);
      //return  [
        //    'news'          => $news,
        //];  

    }

    public function create(){
        $ticker           = News::all();
        return Inertia::render('Admin/News/Create',
    [
        'newscategory'          => $newscategory
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

    public function edit(News $news){
        //return $news;
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
        //$news           = News::all();
        $newscategory           = Newscategory::all();
        $categoryget           = News::select('newscategories.id as newscategories_id','namakategori', 'newscategories.slug')->join('newscategories','newscategories.id',"=",'news.category')->where('newscategories.id', '=', $news->category)->first();
        return Inertia::render('Admin/News/Edit',
        [
            'news'          => $news,
            'newscategory'          => $newscategory,
            'categoryget'          => $categoryget
        ]);
    }

    public function update(Update $request, News $news){
        $data = $request->validated();
        $data['slug'] = Str::slug($data ['judul']);
        if($request->file('img')){
            $data['img'] = Storage::disk("public")->put('news', $request->file('img'));
            Storage::disk("public")->delete($news->img);
        } else {
            $data['img'] = $news->img;
        }

        //$path = Storage::url('public');

        //$img = '<img src"' .$path.'" alt=""/>';

        $news->update($data);
        return redirect(route('admin.dashboard.news.index'))->with(
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
