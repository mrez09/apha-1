<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BukuController;
use App\Http\Controllers\ProsidingController;
use App\Http\Controllers\GaleriController;
use App\Http\Controllers\NewsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\VideoController;
use App\Http\Controllers\NewscategoryController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\NewsadminController;
use App\Http\Controllers\Admin\BookadminController;
use App\Http\Controllers\Admin\GaleriadminController;
use App\Http\Controllers\Admin\BanneradminController;
use App\Http\Controllers\Admin\ProsidingadminController;
use App\Http\Controllers\Admin\VideoadminController;
use App\Http\Controllers\Admin\DivisiadminController;
use App\Http\Controllers\Admin\SubdivisiadminController;
use App\Http\Controllers\Admin\JabatanadminController;
use App\Http\Controllers\Admin\PengurusadminController;
use App\Http\Controllers\Admin\CommiteeadminController;
use App\Http\Controllers\Admin\ContactadminController;
use App\Http\Controllers\Admin\NewscategoryadminController;


//use App\Http\Controllers\Admin\MainbanneradminController;


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
    //Galeri and banner
    Route::resource('galeri', GaleriadminController::class);
    Route::get('galeri/{id}/edit', [GaleriadminController::class, 'edit'])->name('galeri.edit');
    //Banner
    Route::resource('banner', BanneradminController::class);
    Route::get('mainbanner/', [BanneradminController::class, 'mainbanner'])->name('mainbanner.index');
    Route::get('banner/{id}/edit', [BanneradminController::class, 'edit'])->name('banner.edit');
    Route::get('banner/{id}/edit2', [BanneradminController::class, 'edit2'])->name('banner.edit2');
    //Prosiding
    Route::resource('prosiding', ProsidingadminController::class);
    Route::get('prosiding/{id}/edit', [ProsidingadminController::class, 'edit'])->name('prosiding.edit');
    Route::put('prosiding/{buku}/restore', [ProsidingadminController::class, 'restore'])->name('prosiding.restore');
    //Video
    Route::resource('video', VideoadminController::class);
    Route::get('video/{id}/edit', [VideoadminController::class, 'edit'])->name('galeri.edit');
    //Banner
    //Route::resource('main-banner', MainbanneradminController::class);
    //Route::get('main-banner/{id}/edit', [MainbanneradminController::class, 'edit'])->name('mainbanner.edit');
    //Route::put('main-banner/{galeri}/restore', [MainbanneradminController::class, 'restore'])->name('banner.restore');
    //Divisi
    Route::resource('divisi', DivisiadminController::class);
    Route::get('divisi/{id}/edit', [DivisiadminController::class, 'edit'])->name('divisi.edit');
    Route::put('divisi/{divisi}/restore', [DivisiadminController::class, 'restore'])->name('divisi.restore');
    //Divisi
    Route::resource('subdivisi', SubdivisiadminController::class);
    Route::get('subdivisi/{id}/edit', [SubdivisiadminController::class, 'edit'])->name('subdivisi.edit');
    Route::put('subdivisi/{subdivisi}/restore', [SubdivisiadminController::class, 'restore'])->name('divisi.restore');
    //Divisi
    Route::resource('jabatan', JabatanadminController::class);
    Route::get('jabatan/{id}/edit', [JabatanadminController::class, 'edit'])->name('jabatan.edit');
    Route::put('jabatan/{jabatan}/restore', [JabatanadminController::class, 'restore'])->name('jabatan.restore');
    //Divisi
    Route::resource('penguru', PengurusadminController::class);
    Route::get('penguru/{penguru}/edit', [PengurusadminController::class, 'edit'])->name('pengurus.edit');
    Route::put('pengurus/{jabatan}/restore', [PengurusadminController::class, 'restore'])->name('pengurus.restore');
    //Contact
    Route::resource('contact', ContactadminController::class);
    Route::get('contact/{id}/edit', [ContactadminController::class, 'edit'])->name('contact.edit');
    Route::get('contact/{id}/detail', [ContactadminController::class, 'edit'])->name('contact.detail');
    Route::put('contact/{contact}/restore', [ContactadminController::class, 'restore'])->name('contact.restore');
    Route::get('detail/{contact:id}', [ContactadminController::class, 'show'])->name('contact.detail');
    //Divisi
    Route::resource('newscategory', NewscategoryadminController::class);
    Route::get('newscategory/{id}/edit', [NewscategoryadminController::class, 'edit'])->name('newscat.edit');
    Route::put('newscategory/{newscategory}/restore', [NewscategoryadminController::class, 'restore'])->name('pengurus.restore');

    //Pengurus Bahasa Inggris
    Route::resource('commitee', CommiteeadminController::class);
    Route::get('commitee/{id}/edit', [CommiteeadminController::class, 'edit'])->name('pengurus.edit');
    Route::put('commitee/{jabatan}/restore', [CommiteeadminController::class, 'restore'])->name('pengurus.restore');
   
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
    route::get('/dewan-pembina', function () {
        return Inertia::render('Pengurus/Dewan_Pembina');
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
    Route::get('buku/{buku:slug}', [BukuController::class, 'show'])->name('buku.show');
    Route::get('buku/{id}/edit', [BukuController::class, 'edit'])->name('buku.edit');

    //Prosiding
    Route::resource('prosiding', ProsidingController::class);
    Route::get('prosiding/{prosiding:slug}', [ProsidingController::class, 'show'])->name('prosiding.show');
    Route::get('prosiding/{id}/edit', [ProsidingController::class, 'edit'])->name('prosiding.edit');

    //News
    Route::resource('galeri', GaleriController::class);
    Route::resource('video', VideoController::class);
    //Route::get('galeri/{galeri:slug}', [GaleriController::class, 'show'])->name('news.show');
    Route::get('galeri/{id}/edit', [GaleriController::class, 'edit'])->name('galeri.edit');
    

    //News
    Route::resource('contact', ContactController::class);
    //Route::get('galeri/{galeri:slug}', [GaleriController::class, 'show'])->name('news.show');
    //Route::get('galeri/{id}/edit', [GaleriController::class, 'edit'])->name('news.edit');

    //NewsCategory
    //Route::resource('category', NewscategoryController::class);
    Route::get('newscategory/{newscategory:slug}', [NewscategoryController::class, 'show'])->name('newscategory.show');
    //Route::get('news/{id}/edit', [NewsControlleNewscategoryController::class, 'edit'])->name('news.edit');

    //buku
    //Route::get('buku/{buku:slug}', [BukuController::class, 'show'])->name('buku.show');
    

    //response json

    Route::get('getCourse/{id}', function ($id) {
        $course = App\Models\Course::where('category_id',$id)->get();
        return response()->json($course);
    });
    
    Route::get('getDivisi/{id}', function ($id) {
        $course = App\Models\Divisi::where('id',$id)->get();
        return response()->json($course);
    });
    Route::get('getSubdivisi/{id}', function ($id) {
        $course = App\Models\Subdivisi::where('id_divisi',$id)->get();
        return response()->json($course);
    });
    Route::get('getJabatan/{id}', function ($id) {
        $course = App\Models\Jabatan::where('id_subdivisi',$id)->get();
        return response()->json($course);
    });

    //Route::get('/regions', 'ContactController@regions');
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
