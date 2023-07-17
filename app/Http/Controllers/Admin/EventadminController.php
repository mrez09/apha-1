<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use App\Models\Event;
use App\Models\Newscategory;
use Inertia\Inertia;
use App\Http\Requests\Admin\Event\Store;
use App\Http\Requests\Admin\Event\Update;
use Storage;

class EventadminController extends Controller
{
    //
    public function index(){
        $event           = Event::all();
        //$newsjoin       = News::select('news.id as link_id','judul', 'status', 'view', 'namakategori', 'img', 'name', 'newscategories.id as id_cat')->join('users','users.id',"=",'news.id_user')->join('newscategories','newscategories.id',"=",'news.category')->get();
        return Inertia::render('Admin/Event/List',
        [
            'acara'          => $event
        ]);
      //return  [
        //    'news'          => $news,
        //];  

    }

    public function create(){
        //$newscategory           = Event::all();
        return Inertia::render('Admin/Event/Create',
        [
          //  'newscategory'          => $newscategory,
            'ckeditor'              => 'yes',
        ]);
    }

    public function store(Store $request){
        //return Inertia::render('Admin/Event/Create');
        $data = $request->validated();
        $data['img'] = Storage::disk("public")->put('event', $request->file('img'));
        //$data['path'] = "/storage/".$data['img'];
        $data['slug'] = Str::slug($data ['judul']);
        $data['id_user'] = Auth::id();
        $event = Event::create($data);

        return redirect(route('admin.dashboard.event.index'))->with(
            [
                'message'   => "Event Berhasil diUpdate",
                'type'      => "success"
            ]
            );
//          return $request->all();
    }

    public function show(Event $acara){
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
    }

    public function edit(Event $event){
        //return $news;
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
        //$news           = News::all();
        // $newscategory           = Newscategory::all();
        // $categoryget           = News::select('newscategories.id as newscategories_id','namakategori', 'newscategories.slug')->join('newscategories','newscategories.id',"=",'news.category')->where('newscategories.id', '=', $news->category)->first();
        return Inertia::render('Admin/Event/Edit',
        [
            'acara'          => $event,
            'ckeditor'              => 'yes',
        ]);
    }

    public function update(Update $request, Event $event){
        $data = $request->validated();
        $data['slug'] = Str::slug($data['judul']);
        if($request->file('img')){
            $data['img'] = Storage::disk("public")->put('event', $request->file('img'));
            Storage::disk("public")->delete($event->img);
        } else {
            $data['img'] = $event->img;
        }

        //$path = Storage::url('public');

        //$img = '<img src"' .$path.'" alt=""/>';

        $event->update($data);
        return redirect(route('admin.dashboard.event.index'))->with(
            [
                'message'   => "Event Berhasil diUpdate",
                'type'      => "success"
            ]
            );
        
        
// /        return $request->all();
        //return $news;
        //return Inertia::render('Admin/News/Create');
        
        //$news           = News::all();
        //return Inertia::render('Admin/News/Edit',
        //[
          //  'news'          => $news
        //]);
    }

    public function destroy(Event $event){
        $event->delete();
        return redirect(route('admin.dashboard.event.index'))->with(
            [
                'message'   => "Event Berhasil diDelete",
                'type'      => "success"
            ]
            );
        //return $news;
    }

}
