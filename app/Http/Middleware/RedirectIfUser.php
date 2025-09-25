<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RedirectIfUser
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next)
    {
        $user = Auth::user();

        // Kalau belum login, biarkan middleware 'auth' yang tangani
        if (!$user) {
            return $next($request);
        }

        // Kalau user biasa (bukan admin), redirect ke halaman anggota
        if ($user->hasRole('user')) {
            return redirect()->route('anggota.dashboard.index');
        }

        return $next($request);
    }
}