<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\Subdivisi;
use App\Models\Divisi;
use App\Models\Commitee;
use App\Models\Periode;
use Inertia\Inertia;
use App\Http\Requests\Admin\Periode\Store;
use App\Http\Requests\Admin\Periode\Update;
use Storage;

class PeriodeadminController extends Controller
{
    //
    public function index(){
        //$subdivisi           = Divisi::join('subdivisis','subdivisis.id_divisi',"=",'divisis.id')->get();
        //$periode           = Divisi::join('subdivisis','subdivisis.id_divisi',"=",'divisis.id')->where('subdivisis.deleted_at', '=', Null)->get();

        //tidak digunakan
        //whereIsFeatured(true)->whereCategory("Banner")->get()
        //$subdivisi           = Subdivisi::all();
        //$subdivisi           = Subdivisi::join('divisis','divisis.id',"=",'subdivisis.id_divisi')->get();
        
        $periode    = Periode::all();
        
        return Inertia::render('Admin/Periode/List',
        [
            'periode'          => $periode
        ]);
      //return  [
        //    'news'          => $news,
        //];  

    }
    
    public function create(){
        $periode           = Periode::all();
        return Inertia::render('Admin/Periode/Create',
    [
        'periode'          => $periode
    ]);
    }

    public function store(Store $request){
        //return Inertia::render('Admin/News/Create');
        $data = $request->validated();
        //$data['path'] = "/storage/".$data['img'];
        $data['id_divisi'] = $request['id_divisi'];
        $periode = Periode::create($data);

        return redirect(route('admin.dashboard.periode.index'))->with(
            [
                'message'   => "Sub Divisi Berhasil diUpdate",
                'type'      => "success"
            ]
            );
        //return $request->all();
    }

    public function edit(Periode $periode){
        //return $news;
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
        //$periode           = Periode::all();
//        $listdivisi           = Divisi::all();
  //      $subdivisiall           = Subdivisi::all();

 //       $pengurusget           = Commitee::select('commitees.id as commitees_id','nama', 'img', 'namadivisi', 'namasubdivisi', 'namajabatan')->join('divisis','divisis.id',"=",'commitees.divisi')->join('subdivisis','subdivisis.id',"=",'commitees.subdivisi')->join('jabatans', 'jabatans.id',"=",'commitees.jabatan')->join('periodes', 'periodes.id',"=",'commitees.periode')->where('subdivisis.id', '=', $subdivisi->id)->first();
   //     $divisiget           = Divisi::join('subdivisis','subdivisis.id_divisi',"=",'divisis.id')->where('subdivisis.id', '=', $subdivisi->id)->first();
        return Inertia::render('Admin/Periode/Edit',
        [
            'periode'          => $periode,
            
        ]);
    }

    public function update(Update $request, Periode $periode){
        $data = $request->validated();
        
        
        $periode->update($data);
        return redirect(route('admin.dashboard.periode.index'))->with(
            [
                'message'   => "Sub Divisi Berhasil diUpdate",
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

    public function show(Periode $periode){
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
    }

    public function destroy(Periode $periode){
        $periode->delete();
        return redirect(route('admin.dashboard.periode.index'))->with(
            [
                'message'   => "Periode Berhasil diDelete",
                'type'      => "success"
            ]
            );
        //return $news;
    }
}
