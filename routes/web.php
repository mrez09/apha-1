<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BukuController;
use App\Http\Controllers\GaleriController;
use App\Http\Controllers\NewsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\NewsadminController;
use App\Http\Controllers\Admin\BookadminController;
use App\Http\Controllers\Admin\GaleriadminController;
use App\Http\Controllers\Admin\BanneradminController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*
Route::get('admin', function () {
    return 'Hi Admin';
})->middleware('role:admin');

Route::get('user', function () {
    return 'Hi User';
})->middleware('role:user');
*/
/*Normal
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
*/
Route::middleware(['auth', 'role:admin'])->prefix('dashboard')->name('admin.dashboard.')->group(function (){
    Route::get('/', [DashboardController::class, 'index'])->name('index');
    //Route::get('news', [NewsadminController::class, 'index'])->name('news.index');
    //News
    Route::resource('news', NewsadminController::class);
    Route::get('news/{id}/edit', [NewsadminController::class, 'edit'])->name('news.edit');
    Route::put('news/{news}/restore', [NewsadminController::class, 'restore'])->name('news.restore');
    //Book
    Route::resource('buku', BookadminController::class);
    Route::get('buku/{id}/edit', [BookadminController::class, 'edit'])->name('buku.edit');
    Route::put('book/{buku}/restore', [BookadminController::class, 'restore'])->name('Book.restore');
    //Route::get('news', [NewsadminController::class, 'edit'])->name('news.edit');
    //Galeri
    Route::resource('galeri', GaleriadminController::class);
    Route::get('galeri/{id}/edit', [GaleriadminController::class, 'edit'])->name('galeri.edit');
    Route::put('galeri/{galeri}/restore', [GaleriadminController::class, 'restore'])->name('galeri.restore');
    //Banner
    Route::resource('banner', BanneradminController::class);
    Route::get('banner/{id}/edit', [BanneradminController::class, 'edit'])->name('banner.edit');
    Route::put('banner/{galeri}/restore', [BanneradminController::class, 'restore'])->name('banner.restore');
    
});

Route::get('/penasehat', function () {
    return Inertia::render('Penasehat');
});

Route::prefix('/accounts')->name('accounts.')->group(function () {
    route::get('/login', function () {
        return Inertia::render('Accounts/Login');
    })->name('login');

    route::get('/register', function () {
        return Inertia::render('Accounts/Login');
    })->name('register');
});

Route::prefix('pengurus')->name('pengurus.')->group(function () {
    route::get('/dewan-penasehat', function () {
        return Inertia::render('Pengurus/Dewan_Penasehat');
    })->name('dewan-penasehat');
    route::get('/dewan-pengurus', function () {
        return Inertia::render('Pengurus/Dewan_Pengurus');
    })->name('dewan-pengurus');
});

Route::prefix('organisasi')->name('organisasi.')->group(function () {
    route::get('/badan-hukum', function () {
        return Inertia::render('Organisasi/Badan_hukum');
    })->name('badan_hukum');
    route::get('/struktur', function () {
        return Inertia::render('Organisasi/Struktur');
    })->name('struktur');
    route::get('/sejarah', function () {
        return Inertia::render('Organisasi/Sejarah');
    })->name('sejarah');
    route::get('/program-kerja', function () {
        return Inertia::render('Organisasi/ProgramKerja');
    })->name('programkerja');
});

/*
Route::prefix('buku')->name('buku')->group(function () {
    route::get('/', [BukuController::class, 'index']);
    
    
});
*/

Route::prefix('news')->name('news')->group(function () {
    route::get('/', [NewsController::class, 'index']);
    
    
    
});


/*asli
Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
    
});
*/

Route::get('/home', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
    
});

//Galeri asli
/*Route::prefix('galeri')->name('galeri')->group(function () {
    route::get('/', [GaleriController::class, 'index']);    
});*/


//home controller
Route::prefix('/')->name('front')->group(function (){
    Route::get('/', [HomeController::class, 'index'])->name('index');
    //Route::get('news', [NewsadminController::class, 'index'])->name('news.index');

    //News
    Route::resource('news', NewsController::class);
    Route::get('news/{news:slug}', [NewsController::class, 'show'])->name('news.show');
    Route::get('news/{id}/edit', [NewsController::class, 'edit'])->name('news.edit');

    //Buku
    Route::resource('buku', BukuController::class);
    Route::get('buku/{news:slug}', [BukuController::class, 'show'])->name('buku.show');
    Route::get('buku/{id}/edit', [BukuController::class, 'edit'])->name('buku.edit');

    //News
    Route::resource('galeri', GaleriController::class);
    //Route::get('galeri/{galeri:slug}', [GaleriController::class, 'show'])->name('news.show');
    Route::get('galeri/{id}/edit', [GaleriController::class, 'edit'])->name('news.edit');

    //News
    Route::resource('contact', ContactController::class);
    //Route::get('galeri/{galeri:slug}', [GaleriController::class, 'show'])->name('news.show');
    //Route::get('galeri/{id}/edit', [GaleriController::class, 'edit'])->name('news.edit');

    //buku
    //Route::get('buku/{buku:slug}', [BukuController::class, 'show'])->name('buku.show');
    
});

//Route::prefix('buku')->name('buku')->group(function () {
  //  route::get('/', [BukuController::class, 'index']);
    
    
//});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
