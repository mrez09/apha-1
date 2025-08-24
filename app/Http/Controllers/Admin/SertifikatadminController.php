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
use App\Helpers\ImagekitHelper;

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

        /* Storage Biasa */
        /*
        
        if($request->file('img')){
            $data['img'] = Storage::disk("public")->put('sertifikat', $request->file('img'));
        }
            */

        $data = $request->validated();
        /* Image Kit */
        if ($request->has('img')) {
            $data['img'] = $request->img; // langsung simpan URL
        }
        
        //$data['path'] = "/storage/".$data['img'];
        //$data['slug'] = Str::slug($data['no']);
        
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

    public function edit(Sertifikat $sertifikat){
        //return $news;
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
        //$news           = News::all();
        //$newscategory           = Dokumen::all();
        //$categoryget           = News::select('newscategories.id as newscategories_id','namakategori', 'newscategories.slug')->join('newscategories','newscategories.id',"=",'news.category')->where('newscategories.id', '=', $news->category)->first();
        $sertifikat = Sertifikat::with('user')->findOrFail($sertifikat->id);
        $usercategory           = User::all();
        return Inertia::render('Admin/Sertifikat/Edit',
        [
            'sertifikat'            => $sertifikat,
            'usercategory'          => $usercategory,
            //'categoryget'         => $categoryget
        ]);
    }

  public function update(update $request, Sertifikat $sertifikat)
{
    $data = $request->validated();

    $data['slug'] = Str::slug($data['judul']);

    // kalau ada img baru → replace
    if ($request->has('img')) {
        $data['img'] = $request->input('img');
    } else {
        $data['img'] = $sertifikat->img;
    }

    $sertifikat->update($data);

    return redirect()
        ->route('admin.dashboard.sertifikat.index')
        ->with([
        'message' => 'Sertifikat berhasil diupdate',
        'type'    => 'success',
    ]);
}

    public function destroy(Sertifikat $sertifikat){
        $dokumen->delete();
        return redirect(route('admin.dashboard.sertifikat.index'))->with(
            [
                'message'   => "Sertifikat Berhasil diDelete",
                'type'      => "success"
            ]
            );
        //return $news;
    }
}
