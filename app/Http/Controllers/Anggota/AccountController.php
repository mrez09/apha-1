<?php

namespace App\Http\Controllers\Anggota;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\URL;
use App\Models\Buku;
//use App\Models\Anggota;
use App\Models\Member;
use App\Models\User;
use App\Models\Commitee;
use App\Models\Konfigurasi;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\Member\Anggota\Store;
use App\Http\Requests\Member\Anggota\Update;
use App\Http\Requests\Member\Profile\Updatepassword;
use Storage;

class AccountController extends Controller
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
        return Inertia::render('Anggota/Account/List',
        [
            'status'          => $status,
            'user_id'          => $user_id,
            'anggota'          => $anggota,
            'ckeditor'              => 'yes',
        ]);
    }

    public function show(Member $member){
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
    }

    public function email(){
        
        //$anggota        = auth.user.id;
        //$data = $request->session()->all();
        $user_id            = Auth::user()->id;
        //asli
//        $anggota           = Member::select('users.id as user_id','members.id as anggota_id', 'nama', 'no_kta', 'jk', 'kode', 'users.email', 'img', 'universitas', 'fakultas', 'alamatf', 'mk', 'alamat', 'phone', 'scholar', 'scopus', 'sinta', 'status', 'dec', 'join_at')->join('users','members.id_user',"=",'users.id')->where('members.id_user', '=', $user_id)->first();
        //baru
        $anggota           = Member::select('users.id as user_id','members.id as anggota_id','id_com as com_id' , 'nama', 'no_kta', 'jk', 'kode', 'users.email', 'img', 'universitas', 'fakultas', 'alamatf', 'mk', 'alamat', 'phone', 'scholar', 'scopus', 'sinta', 'status', 'dec', 'join_at')->join('users','members.id_user',"=",'users.id')->where('members.id_user', '=', $user_id)->first();

        //$status           = Anggota::select('users.id as user_id','name', 'email')->join('anggotas','anggotas.id_user',"=",'users.user_id')->where('users.user_id', '=', 12)->first();
        $status           = Member::select('users.id as user_id', 'members.id as anggota_id', 'nama', 'users.email', 'status')->join('users','members.id_user',"=",'users.id')->where('users.id', '=', $user_id)->first();
        return Inertia::render('Anggota/Account/EmailList',
        [
            'status'          => $status,
            'user_id'          => $user_id,
            'anggota'          => $anggota,
            'ckeditor'              => 'yes',
        ]);
    }

    public function password(){
        
        //$anggota        = auth.user.id;
        //$data = $request->session()->all();
        $user_id            = Auth::user()->id;
        //asli
//        $anggota           = Member::select('users.id as user_id','members.id as anggota_id', 'nama', 'no_kta', 'jk', 'kode', 'users.email', 'img', 'universitas', 'fakultas', 'alamatf', 'mk', 'alamat', 'phone', 'scholar', 'scopus', 'sinta', 'status', 'dec', 'join_at')->join('users','members.id_user',"=",'users.id')->where('members.id_user', '=', $user_id)->first();
        //baru
        $anggota           = Member::select('users.id as user_id','members.id as anggota_id','id_com as com_id' , 'nama', 'no_kta', 'jk', 'kode', 'users.email', 'img', 'universitas', 'fakultas', 'alamatf', 'mk', 'alamat', 'phone', 'scholar', 'scopus', 'sinta', 'status', 'dec', 'join_at')->join('users','members.id_user',"=",'users.id')->where('members.id_user', '=', $user_id)->first();

        //$status           = Anggota::select('users.id as user_id','name', 'email')->join('anggotas','anggotas.id_user',"=",'users.user_id')->where('users.user_id', '=', 12)->first();
        $status           = Member::select('users.id as user_id', 'members.id as anggota_id', 'nama', 'users.email', 'status')->join('users','members.id_user',"=",'users.id')->where('users.id', '=', $user_id)->first();
        return Inertia::render('Anggota/Account/PasswordList',
        [
            'status'          => $status,
            'user_id'          => $user_id,
            'anggota'          => $anggota,
            'ckeditor'              => 'yes',
        ]);
    }

    public function store(Store $request){
        //return Inertia::render('Admin/News/Create');
        $data = $request->validated();
        //$data['id_user'] = Auth::id();

        //foto
//        $data['img'] = Storage::disk("public")->put('profile', $request->file('img'));
        
        //Commitee
        $id_com = Commitee::max('id') + 1;
        $id_user = User::max('id') + 1;


        $data['id_com'] = $id_com;
        $data['id_user'] = $id_user;
//        $data['slug'] = Str::slug($data['nama']);
//        $data['divisi'] = 3;
//        $data['subdivisi'] = 1;
//        $data['jabatan'] = 12;
//        $data['periode'] = 1;
//        $data['join_at'] = date('Y-m-d H:i:s');;

        //$data['slug_kta'] = Str::slug($data['nama']);
//        $data['name'] = $data['nama'];
        $data['password'] = Hash::make($request->password);

        $user = User::update($data);
//      $user->assignRole('user');
        $Anggota = Member::update($data);
        $commitee = Commitee::update($data);

        
        
        
        
        return redirect(route('frontkeanggotaan.index'))->with(
            [
                'message'   => "Data Anda Sudah Diajukan, Anda Sudah Bisa Login untuk Mengetahui Status Anda. | Terima Kasih ",
                'type'      => "success"
            ]
            );
        return $request->all();
    }
}
