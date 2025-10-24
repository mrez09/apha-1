<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Validation\ValidationException;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        try {
            $request->authenticate();

        } catch (ValidationException $e) {

            throw ValidationException::withMessages([
                'email' => 'Email atau password yang Anda masukkan salah.',
            ]);

        }

        $request->session()->regenerate();


        if (Auth::user()->hasRole('user')) {
            return redirect(route('anggota.dashboard.index'));
        }


        if (Auth::user()->hasRole('admin')) {
            return redirect()->intended(RouteServiceProvider::HOME);
        }


        return redirect()->intended(RouteServiceProvider::HOME);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        
        return redirect('/login')
            ->with([
                'message' => 'Anda telah berhasil logout.',
                'type' => 'success'
            ]);
        }
    }
