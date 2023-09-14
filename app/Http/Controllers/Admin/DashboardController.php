<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\URL;
use App\Models\Buku;
use App\Models\Anggota;
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
        return Inertia::render('Dashboard');

    }
}
