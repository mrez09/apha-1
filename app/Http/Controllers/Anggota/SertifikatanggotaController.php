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

class SertifikatanggotaController extends Controller
{
    //
    public function index(){
//        $member          = Sertifikat::all();
        $user_id            = Auth::user()->id;
        //asli
//        $anggota           = Member::select('users.id as user_id','members.id as anggota_id', 'nama', 'no_kta', 'jk', 'kode', 'users.email', 'img', 'universitas', 'fakultas', 'alamatf', 'mk', 'alamat', 'phone', 'scholar', 'scopus', 'sinta', 'status', 'dec', 'join_at')->join('users','members.id_user',"=",'users.id')->where('members.id_user', '=', $user_id)->first();
        //baru
        $sertifikat           = Sertifikat::select('users.id as user_id','sertifikats.id as sertifikat_id','no' , 'nama', 'judul', 'id_user', 'category', 'img', 'img', 'publish_at')->join('users','sertifikats.id_user',"=",'users.id')->where('sertifikats.id_user', '=', $user_id)->where('sertifikats.status', '=', 1)->get();
        return Inertia::render('Anggota/Sertifikat/List',
    [
        'sertifikat'          => $sertifikat
    ]);
      //return  [
        //    'news'          => $news,
        //];  

    }
}
