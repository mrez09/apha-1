<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;
use App\Mail\VerificationSuccess;
use App\Models\Member;

class VerifyEmailController extends Controller
{
    /**
     * Mark the authenticated user's email address as verified.
     */

    /**
     * old invoke
     
    * public function __invoke(EmailVerificationRequest $request): RedirectResponse
    * {
    *     if ($request->user()->hasVerifiedEmail()) {
    *         return redirect()->intended(RouteServiceProvider::HOME.'?verified=1');
    *     }
    * 
    *     if ($request->user()->markEmailAsVerified()) {
    *         event(new Verified($request->user()));
    *     }
    * 
    *     return redirect()->intended(RouteServiceProvider::HOME.'?verified=1');
    * }
        */

    public function __invoke(EmailVerificationRequest $request)
    {
        $user = $request->user();
        $ip = request()->ip();
        
        // Ambil lokasi (opsional)
        $response = Http::get("https://ipapi.co/{$ip}/json/");
        $location = $response->json()['city'] ?? 'Tidak diketahui';
        
        // Update data user
        $user->update([
            'email_verified_at' => now(),
            'verified_ip' => $ip,
            'verified_location' => $location,
        ]);

        // Kirim email konfirmasi
        try {
            Mail::to($user->email)->send(new VerificationSuccess($user));
        } catch (\Exception $e) {
            \Log::error('Gagal kirim email sukses verifikasi: '.$e->getMessage());
        }

        $request->fulfill();

        if ($user->hasRole('admin')) {
            return redirect()->route('admin.dashboard.index')->with('message', 'Email berhasil diverifikasi!');
        } elseif ($user->hasRole('user')) {
            return redirect()->route('anggota.dashboard.index')->with('message', 'Email berhasil diverifikasi!');
        }

        return redirect('/')->with('message', 'Email berhasil diverifikasi!');
    }
}
