<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use App\Models\Jabatan;
use App\Models\Subdivisi;
use App\Models\Divisi;
use App\Models\Pengurus;
use Inertia\Inertia;
use App\Http\Requests\Admin\Pengurus\Store;
use App\Http\Requests\Admin\Pengurus\Update;
use Storage;

class PengurusadminController extends Controller
{
    //
    public function index(){
        $pengurus           = Pengurus::all();
    //id subdivisi    //
    //$jabatan           = Subdivisi::join('jabatans','jabatans.id_subdivisi',"=",'subdivisis.id')->join('divisis','divisis.id',"=",'subdivisis.id_divisi')->get();
    //id divisi    
    //$jabatan           = Jabatan::join('subdivisis','subdivisis.id',"=",'jabatans.id')->join('divisis','divisis.id',"=",'subdivisis.id_divisi')->get();
        //$jabatan           = Divisi::join('subdivisis','subdivisis.id',"=",'jabatans.id')->join('divisis','divisis.id',"=",'subdivisis.id_divisi')->get();
        
        return Inertia::render('Admin/Pengurus/List',
    [
        'pengurus'          => $pengurus
    ]);
    }
}
