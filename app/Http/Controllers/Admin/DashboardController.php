<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\DB;
use App\Models\News;
use App\Models\Buku;
use App\Models\Anggota;
use App\Models\User;
use App\Models\Member;
use App\Models\Commitee;
use App\Models\Galeri;
use App\Models\Konfigurasi;
use App\Models\Prosiding;
use App\Models\Invoice;
use App\Models\PaymentProof;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\Member\Anggota\Store;
use App\Http\Requests\Member\Anggota\Update;
use Storage;

class DashboardController extends Controller
{
    //
    
    public function index(){
     
        $jumlahPost = News::count();
        $jumlahMember = User::count();
        $jumlahGaleri = Galeri::count();
        $totalAnggota = Member::count();
        $anggotaAktif     = Member::where('status', '1')->count();
        $anggotaNonAktif  = Member::where('status', '!=', '1')->count();
        $totalBuku        = Buku::count();
        $totalProsiding   = Prosiding::count();

        //Bulanan

        $postPerMonth = DB::table('news')
        ->selectRaw('DATE_FORMAT(created_at, "%Y-%m") as bulan, COUNT(*) as jumlah')
        ->groupBy('bulan')
        ->orderBy('bulan')
        ->get();

        $eventPerMonth = DB::table('events')
        ->selectRaw('DATE_FORMAT(created_at, "%Y-%m") as bulan, COUNT(*) as jumlah')
        ->groupBy('bulan')
        ->orderBy('bulan')
        ->get();

        //Invoice
        $paymentSummary = [
            'total' => Invoice::count(),

            'paid' => Invoice::where(
                'status',
                'paid'
            )->count(),

            'pending' => Invoice::where(
                'status',
                'pending'
            )->count(),

            'expired' => Invoice::where(
                'status',
                'expired'
            )->count(),

            'failed' => Invoice::where(
                'status',
                'failed'
            )->count(),

            'midtrans' => Invoice::where(
                'gateway',
                'midtrans'
            )->count(),

            'manual' => PaymentProof::where(
                'status',
                'approved'
            )->count(),
        ];

        
        return Inertia::render('Dashboard',
        [
            'jumlahPost' => $jumlahPost,
            'jumlahMember' => $jumlahMember,
            'jumlahGaleri' => $jumlahGaleri,
            'totalAnggota' => $totalAnggota,
            'anggotaAktif' => $anggotaAktif, 
            'anggotaTidakAktif' => $anggotaNonAktif, 
            'totalBuku' => $totalBuku,
            'totalProsiding' => $totalProsiding,
            'postPerMonth' => $postPerMonth,
            'eventPerMonth' => $eventPerMonth,
            'paymentSummary' => $paymentSummary
        ]);
    }
}
