<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\URL;
use App\Models\Sertifikat;
use App\Models\Konfigurasi;
use Illuminate\Support\Str;
use Storage;
use Illuminate\Support\Facades\RateLimiter;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Illuminate\Support\HtmlString;
use Illuminate\Support\Facades\Http;
use Illuminate\Validation\ValidationException;

class SertifikatController extends Controller
{
    //
    public function index()
    {
        
        $sertifikat       = Sertifikat::where('sertifikats.status', '=', 'Publish')->orderBy('publish_at', 'desc')->get();
        
        
        
        return inertia('Sertifikat/List', [
            'sertifikat' => [],
            'searchQuery' => null,
            //'recaptcha_site_key' => recaptcha_site_key(),
        ]);
    }

    public function search(Request $request){
        //Limiter
        $ip = $request->ip();
    $key = 'search-certificates:' . $ip;

    if (RateLimiter::tooManyAttempts($key, 3)) {
        $seconds = RateLimiter::availableIn($key);

        return redirect()->back()
            ->with('message', "⛔ Terlalu banyak permintaan. Coba lagi dalam {$seconds} detik.")
            ->with('type', 'error');
    }


         RateLimiter::hit($key, 300); // reset tiap 60 detik

        //Capcha
         $response = Http::asForm()->post('https://www.google.com/recaptcha/api/siteverify', [
            'secret' => recaptcha_secret_key(),
            'response' => $request->recaptcha,
        ]);

        $result = $response->json();

        if (!($result['success'] ?? false)) {
            return back()->withErrors(['recaptcha' => 'Verifikasi captcha gagal.'])->withInput();
        }
    
        //Search
        $request->validate([
            'search' => 'required|string'
        ]);
        
        $query = $request->input('search');
        $sertifikat = Sertifikat::where('no', 'LIKE', "%$query%")->get();
        
        return inertia('Sertifikat/List', [
            'sertifikat' => $sertifikat,
            'searchQuery' => $query
        ]);
    }

    public function show($no)
    {
        //$sertifikat = Sertifikat::where('no', $no)->first();
        $sertifikat = Sertifikat::where('no', $no)->first();
         
        if (!$sertifikat) {
            return Inertia::render('Sertifikat/Verifikasi', [
                'valid' => false,
                'no' => $no,
            ]);
        }
        
        //$qr = QrCode::size(200)->generate(route('frontsertifikat.verify', $sertifikat->no));
         
        $qr = (string) QrCode::size(200)->generate(route('frontsertifikat.check', $sertifikat->no ));
        $qrasli = (string) QrCode::size(200)->generate(route('frontsertifikat.verify', $sertifikat->no ));
        
        return Inertia::render('Sertifikat/Show', [
            'sertifikat' => $sertifikat,
            'qrcode' => $qr, // ← ini HTML SVG
        ]); 
    }
    
    public function verify($no)
    {
        $sertifikat = Sertifikat::where('no', $no)->first();
        if (!$sertifikat) {
            return Inertia::render('Sertifikat/Verifikasi', [
                'valid' => false,
                'no' => $no,
            ]);
        }
        
        return Inertia::render('Sertifikat/Show', [
            'valid' => true,
            'sertifikat' => $sertifikat,
        ]);
    }

}
