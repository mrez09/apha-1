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
        
        
        $user_id            = Auth::user()->id;
        
        
        //$value = $request->session()->get('name');
        //$anggota           = Member::select('users.id as user_id', 'members.id as member_id', 'name', 'nama', 'no_kta', 'kode', 'jk', 'users.email', 'img', 'universitas', 'fakultas', 'alamatf', 'mk', 'alamat', 'phone', 'scholar', 'scopus', 'sinta', 'status', 'dec', 'join_at')->join('users','members.id_user',"=",'users.id')->where('users.id', '=', $user_id)->first();
//        $anggota           = Member::select('users.id as user_id', 'members.id as member_id', 'id_com as com_id', 'nama', 'no_kta', 'jk', 'slug_kta', 'kode', 'users.email', 'img', 'universitas', 'fakultas', 'alamatf', 'mk', 'alamat', 'phone', 'scholar', 'scopus', 'sinta', 'status', 'dec', 'join_at')->join('users','members.id_user',"=",'users.id')->where('users.id', '=', $user_id)->first();
        //$anggota           = Member::select('users.id as user_id','members.id as anggota_id','id_com as com_id' , 'nama', 'no_kta', 'jk', 'slug_kta', 'kode', 'users.email', 'img', 'universitas', 'fakultas', 'alamatf', 'mk', 'alamat', 'phone', 'scholar', 'scopus', 'sinta', 'status', 'dec', 'join_at')->join('users','members.id_user',"=",'users.id')->where('members.id_user', '=', $user_id)->first();

        $anggota = Member::select(
        'users.id as user_id',
        'members.id as member_id',
        'members.id_com as com_id',
        'members.nama',
        'members.no_kta',
        'members.jk',
        'members.slug_kta',
        'members.kode',
        'users.email',
        'members.img',
        'members.universitas',
        'members.fakultas',
        'members.alamatf',
        'members.mk',
        'members.alamat',
        'members.phone',
        'members.scholar',
        'members.scopus',
        'members.sinta',
        'members.start_date',
        'members.expired_date',
        'members.status',
        'members.dec',
        'members.join_at',
        'users.email_verified_at',

        // tambahkan field dari tabel lain
        'commitees.nama as nama_commitee',
        'commitees.slug as slug_biodata',
        'divisis.namadivisi as namadivisi',
        'subdivisis.namasubdivisi as namasubdivisi',
        'jabatans.namajabatan as namajabatan'
    )
    ->join('users', 'members.id_user', '=', 'users.id')
    ->leftJoin('commitees', 'members.id_com', '=', 'commitees.id')
    ->leftJoin('divisis', 'commitees.divisi', '=', 'divisis.id')
    ->leftJoin('subdivisis', 'commitees.subdivisi', '=', 'subdivisis.id')
    ->leftJoin('jabatans', 'commitees.jabatan', '=', 'jabatans.id')
    ->where('users.id', '=', $user_id)
    ->first();

        return Inertia::render('Anggota/Dashboard',
        [
            'anggota'          => $anggota,
            'username'         => $user_id,
            'ckeditor'              => 'no',
        ]);
    }
}
