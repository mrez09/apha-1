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
use Storage;

class DashboardController extends Controller
{
    //
    public function index(){
        
        //$anggota        = auth.user.id;
        //$status           = Anggota::select('users.id as user_id','name', 'email')->join('anggotas','anggotas.id_user',"=",'users.user_id')->where('users.user_id', '=', 12)->first();
        $user_id            = Auth::user()->id;
        
        
        //$value = $request->session()->get('name');
        $anggota           = Member::select('users.id as user_id', 'members.id as member_id', 'name', 'nama', 'no_kta', 'kode', 'jk', 'users.email', 'img', 'universitas', 'fakultas', 'alamatf', 'mk', 'alamat', 'phone', 'scholar', 'scopus', 'sinta', 'status', 'dec', 'join_at')->join('users','members.id_user',"=",'users.id')->where('users.id', '=', $user_id)->first();
        return Inertia::render('Anggota/Dashboard',
        [
            'anggota'          => $anggota,
            'username'         => $user_id,
            'ckeditor'              => 'no',
        ]);
    }
}
