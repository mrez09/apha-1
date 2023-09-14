<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use App\Models\Buku;
use App\Models\Member;
use App\Models\User;
use App\Models\Sertifikat;
use App\Models\Newscategory;
use Inertia\Inertia;
use App\Http\Requests\Admin\Sertifikat\Store;
use App\Http\Requests\Admin\Sertifikat\Update;
use Storage;

class SertifikatadminController extends Controller
{
    //
    public function index(){
        $sertifikat          = Sertifikat::all();
        return Inertia::render('Admin/Sertifikat/List',
    [
        'sertifikat'          => $sertifikat
    ]);
      //return  [
        //    'news'          => $news,
        //];  

    }

    public function create(){
        $newscategory           = User::all();
        return Inertia::render('Admin/Sertifikat/Create',
        [
            'newscategory'         => $newscategory,
            'ckeditor'              => 'yes',
        ]);
    }

    public function store(Store $request){
        //return Inertia::render('Admin/News/Create');
        $data = $request->validated();
        if($request->file('img')){
            $data['img'] = Storage::disk("public")->put('sertifikat', $request->file('img'));
        }
        
        //$data['path'] = "/storage/".$data['img'];
        $data['slug'] = Str::slug($data ['no']);
        
      //  $data['dec'] = $data ['konten'];
        //$data['id_user'] = Auth::id();
        $sertifikat = Sertifikat::create($data);

        return redirect(route('admin.dashboard.sertifikat.index'))->with(
            [
                'message'   => "Sertifikat Berhasil Di tambah",
                'type'      => "success"
            ]
            );
        //return $request->all();
    }
}
