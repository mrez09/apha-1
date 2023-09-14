<?php

namespace App\Http\Controllers\Anggota;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
//use App\Models\Anggota;
use App\Models\Member;
use App\Models\News;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\Member\Anggota\Store;
use App\Http\Requests\Member\Anggota\Update;
use Storage;

class InstitusiController extends Controller
{
    //
    public function index(){
        
        //$anggota        = auth.user.id;
        //$data = $request->session()->all();
        $user_id            = Auth::user()->id;
        //asli
//        $anggota           = Member::select('users.id as user_id','members.id as anggota_id', 'nama', 'no_kta', 'jk', 'kode', 'users.email', 'img', 'universitas', 'fakultas', 'alamatf', 'mk', 'alamat', 'phone', 'scholar', 'scopus', 'sinta', 'status', 'dec', 'join_at')->join('users','members.id_user',"=",'users.id')->where('members.id_user', '=', $user_id)->first();
        //baru
        $anggota           = Member::select('users.id as user_id','members.id as anggota_id','id_com as com_id' , 'nama', 'no_kta', 'jk', 'kode', 'users.email', 'img', 'universitas', 'fakultas', 'alamatf', 'mk', 'alamat', 'phone', 'scholar', 'scopus', 'sinta', 'status', 'dec', 'join_at')->join('users','members.id_user',"=",'users.id')->where('members.id_user', '=', $user_id)->first();

        //$status           = Anggota::select('users.id as user_id','name', 'email')->join('anggotas','anggotas.id_user',"=",'users.user_id')->where('users.user_id', '=', 12)->first();
        $status           = Member::select('users.id as user_id', 'members.id as anggota_id', 'nama', 'users.email', 'status')->join('users','members.id_user',"=",'users.id')->where('users.id', '=', $user_id)->first();
        return Inertia::render('Anggota/Institusi/List',
        [
            'status'          => $status,
            'user_id'          => $user_id,
            'anggota'          => $anggota,
            'ckeditor'              => 'yes',
        ]);
    }
}
