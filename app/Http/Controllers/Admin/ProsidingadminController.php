<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use App\Models\Prosiding;
use Inertia\Inertia;
use App\Http\Requests\Admin\Prosiding\Store;
use App\Http\Requests\Admin\Prosiding\Update;
use Storage;

class ProsidingadminController extends Controller
{
    //
    
    public function index(){
        $prosiding          = Prosiding::all();
        return Inertia::render('Admin/Prosiding/List',
    [
        'prosiding'          => $prosiding
    ]);
      //return  [
        //    'news'          => $news,
        //];  

    }

    public function create(){
        return Inertia::render('Admin/Prosiding/Create');
    }
    
    public function store(Store $request){
        //return Inertia::render('Admin/News/Create');
        $data = $request->validated();
        $data['thumbnail'] = Storage::disk("public")->put('news', $request->file('img'));
        //$data['path'] = "/storage/".$data['img'];
        $data['slug'] = Str::slug($data ['name']);
        
        //$data['decription'] = $data ['konten'];
        //$data['id_user'] = Auth::id();
        $prosiding = Prosiding::create($data);

        return redirect(route('admin.dashboard.prosiding.index'))->with(
            [
                'message'   => "Prosiding Berhasil diTambah",
                'type'      => "success"
            ]
            );
        //return $request->all();
    }
    public function show(Prosiding $prosiding){
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
    }

    public function edit(Prosiding $prosiding){
        //return $news;
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
        //$news           = News::all();
        return Inertia::render('Admin/Prosiding/Edit',
        [
            'prosiding'          => $prosiding
        ]);
    }

    public function update(Update $request, Prosiding $prosiding){
        $data = $request->validated();
        //$data['decription'] = $data['konten'];
        $data['slug'] = Str::slug($data ['name']);
        if($request->file('img')){
            $data['thumbnail'] = Storage::disk("public")->put('prosiding', $request->file('img'));
            //Storage::disk("public")->delete($buku->img);
        } else {
            $data['img'] = $prosiding->img;
        }

        
        
        $prosiding->update($data);
        return redirect(route('admin.dashboard.prosiding.index'))->with(
            [
                'message'   => "Prosiding Berhasil diUpdate",
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

    public function destroy(Prosiding $prosiding){
        $prosiding->delete();
        return redirect(route('admin.dashboard.prosiding.index'))->with(
            [
                'message'   => "Prosiding Berhasil diDelete",
                'type'      => "success"
            ]
            );
        //return $news;
    }

}
