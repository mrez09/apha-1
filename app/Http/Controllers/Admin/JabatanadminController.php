<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use App\Models\Jabatan;
use App\Models\Subdivisi;
use App\Models\Divisi;
use Inertia\Inertia;
use App\Http\Requests\Admin\Jabatan\Store;
use App\Http\Requests\Admin\Jabatan\Update;
use Storage;

class JabatanadminController extends Controller
{
    //
    public function index(){
        //$jabatan           = Divisi::join('subdivisis','subdivisis.id_divisi',"=",'divisis.id')->join('jabatans', 'jabatans.id_subdivisi',"=",'subdivisis.id')->get();
        
        $jabatan           = Jabatan::all();
        //$jabatan           = Jabatan::all();
    //id subdivisi    //
    //dipake $jabatan           = Subdivisi::join('jabatans','jabatans.id_subdivisi',"=",'subdivisis.id')->join('divisis','divisis.id',"=",'subdivisis.id_divisi')->get();
    
    //id divisi    
    //$jabatan           = Jabatan::join('subdivisis','subdivisis.id',"=",'jabatans.id')->join('divisis','divisis.id',"=",'subdivisis.id_divisi')->get();
        //$jabatan           = Divisi::join('subdivisis','subdivisis.id',"=",'jabatans.id')->join('divisis','divisis.id',"=",'subdivisis.id_divisi')->get();
        
        return Inertia::render('Admin/Jabatan/List',
    [
        'jabatan'          => $jabatan
    ]);
      //return  [
        //    'news'          => $news,
        //];  

    }

    public function create(){
        return Inertia::render('Admin/Jabatan/Create');
    }

    public function store(Store $request){
        //return Inertia::render('Admin/News/Create');
        $data = $request->validated();
        //$data['path'] = "/storage/".$data['img'];
        $jabatan = Jabatan::create($data);

        return redirect(route('admin.dashboard.jabatan.index'))->with(
            [
                'message'   => "Jabatan Berhasil diTambah",
                'type'      => "success"
            ]
            );
        //return $request->all();
    }

    public function edit(Jabatan $jabatan){
        //return $news;
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
        //$news           = News::all();
        return Inertia::render('Admin/Jabatan/Edit',
        [
            'jabatan'          => $jabatan
        ]);
    }

    public function update(Update $request, Jabatan $jabatan){
        $data = $request->validated();
        
        
        $jabatan->update($data);
        return redirect(route('admin.dashboard.jabatan.index'))->with(
            [
                'message'   => "Jabatan Berhasil diUpdate",
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

   

    public function destroy(Jabatan $jabatan){
        $jabatan->delete();
        return redirect(route('admin.dashboard.jabatan.index'))->with(
            [
                'message'   => "Jabatan Berhasil diDelete",
                'type'      => "success"
            ]
            );
        //return $news;
    }
}
