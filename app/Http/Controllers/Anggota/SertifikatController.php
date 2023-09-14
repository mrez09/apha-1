<?php

namespace App\Http\Controllers\Anggota;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use App\Models\News;
use App\Models\Newscategory;
use App\Models\Sertifikat;
use Inertia\Inertia;
use App\Http\Requests\Admin\News\Store;
use App\Http\Requests\Admin\News\Update;
use Storage;

class SertifikatController extends Controller
{
    //
    public function index(){
//        $news           = Sertifikat::all();
        $user_id            = Auth::user()->id;
        //asli
//        $anggota           = Member::select('users.id as user_id','members.id as anggota_id', 'nama', 'no_kta', 'jk', 'kode', 'users.email', 'img', 'universitas', 'fakultas', 'alamatf', 'mk', 'alamat', 'phone', 'scholar', 'scopus', 'sinta', 'status', 'dec', 'join_at')->join('users','members.id_user',"=",'users.id')->where('members.id_user', '=', $user_id)->first();
        //baru
        $sertifikat           = Sertifikat::select('users.id as user_id','sertifikat.id as sertifikat_id','no' , 'nama', 'judul', 'id_user', 'category', 'img', 'img', 'publish_at')->join('users','sertifikat.id_user',"=",'users.id')->where('sertifikat.id_user', '=', $user_id)->first();
        $newsjoin       = News::select('news.id as link_id','judul', 'status', 'view', 'namakategori', 'img', 'name', 'newscategories.id as id_cat')->join('users','users.id',"=",'news.id_user')->join('newscategories','newscategories.id',"=",'news.category')->get();
        return Inertia::render('Admin/News/List',
        [
            'news'          => $sertifikat
        ]);
      //return  [
        //    'news'          => $news,
        //];  

    }
}
