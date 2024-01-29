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
use App\Http\Controllers\PengurusController;
use App\Http\Controllers\CommiteeController;
use App\Http\Controllers\DokumenController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\SertifikatController;
use App\Http\Controllers\AnggotaController;
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
use App\Http\Controllers\Admin\PeriodeadminController;
use App\Http\Controllers\Admin\KonfigurasiadminController;
use App\Http\Controllers\Admin\ErrorpageadminController;
use App\Http\Controllers\Admin\DocumentadminController;
use App\Http\Controllers\Admin\EventadminController;
use App\Http\Controllers\Admin\MemberadminController;
use App\Http\Controllers\Admin\SertifikatadminController;
use App\Http\Controllers\Admin\PaymentadminController;
use App\Http\Controllers\Anggota\DashboardController as AnggotaDashboardContoller;
use App\Http\Controllers\Anggota\ProfileController as AnggotaProfileController;
use App\Http\Controllers\Anggota\MemberController;
use App\Http\Controllers\Anggota\InstitusiController;
use App\Http\Controllers\Anggota\AccountController;
use App\Http\Controllers\Anggota\SertifikatanggotaController;
use App\Http\Controllers\Anggota\PaymentController;
use App\Http\Controllers\Anggota\KTAController;




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
    Route::get('video/{id}/edit', [VideoadminController::class, 'edit'])->name('video.edit');
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
    Route::get('newscategory/{id}/edit', [NewscategoryadminController::class, 'edit'])->name('newscategory.edit');
    Route::put('newscategory/{newscategory}/restore', [NewscategoryadminController::class, 'restore'])->name('newscategory.restore');

    //Pengurus Bahasa Inggris
    Route::resource('commitee', CommiteeadminController::class);
    Route::get('commitee/{id}/edit', [CommiteeadminController::class, 'edit'])->name('pengurus.edit');
    Route::put('commitee/{jabatan}/restore', [CommiteeadminController::class, 'restore'])->name('pengurus.restore');

    //Periode
    Route::resource('periode', PeriodeadminController::class);
    Route::get('periode/{periode}/edit', [PeriodeadminController::class, 'edit'])->name('periode.edit');
    Route::put('periode/{jabatan}/restore', [PeriodeadminController::class, 'restore'])->name('periode.restore');

    //Error page
    Route::get('errorpage', [ErrorpageadminController::class, 'maintenance'])->name('errorpage.maintenance');
   
    //Konfigurasi
    Route::resource('konfigurasi', KonfigurasiadminController::class);
    
    Route::get('konfigurasi/{konfigurasi:slug}/edit', [KonfigurasiadminController::class, 'edit'])->name('konfigurasi.edit');
    //Konfig Pengurus
    Route::get('pengurus/konfigurasi/{konfigurasi:slug}', [KonfigurasiadminController::class, 'editpengurus'])->name('konfigurasi.pengurus.edit');
    Route::put('konfigurasi/updatepengurus/{konfigurasi:id}', [KonfigurasiadminController::class, 'updatepengurus'])->name('konfigurasi.updatepengurus');
    Route::put('periode/{jabatan}/restore', [PeriodeadminController::class, 'restore'])->name('periode.restore');

    //Periode
    Route::resource('document', DocumentadminController::class);
    Route::get('document/{document}/edit', [DocumentadminController::class, 'edit'])->name('document.edit');
    Route::put('document/{document}/restore', [DocumentadminController::class, 'restore'])->name('document.restore');

    //Event
    Route::resource('event', EventadminController::class);
    Route::get('event/{event}/edit', [EventadminController::class, 'edit'])->name('event.edit');
    Route::put('event/{event}/restore', [EventadminController::class, 'restore'])->name('event.restore');

    //Event
    Route::resource('member', MemberadminController::class);
    Route::get('member/{member}/edit', [MemberadminController::class, 'edit'])->name('memberadmin.edit');
    Route::put('member/{member}/restore', [MemberadminController::class, 'restore'])->name('event.restore');

    //Sertifikat
    //Periode
    Route::resource('sertifikat', SertifikatadminController::class);
    Route::get('sertifikat/{document}/edit', [SertifikatadminController::class, 'edit'])->name('sertifikat.edit');
    Route::put('sertifikat/{document}/restore', [SertifikatadminController::class, 'restore'])->name('sertifikat.restore');

    //Sertifikat
    //Periode
    Route::resource('payment', PaymentadminController::class);
    Route::get('payment/{payment}/edit', [PaymentadminController::class, 'edit'])->name('payment.edit');
    Route::put('payment/{payment}/restore', [PaymentadminController::class, 'restore'])->name('payment.restore');
});

//User Control
    Route::middleware(['auth', 'role:user'])->prefix('anggota')->name('anggota.dashboard.')->group(function (){
    //Anggota
    Route::get('/', [AnggotaDashboardContoller::class, 'index'])->name('index');
    
    Route::resource('profile', AnggotaProfileController::class);
    Route::get('profile/{id}/edit', [AnggotaProfileController::class, 'edit'])->name('anggotaprofile.edit');
    Route::put('profile/{anggota}/restore', [AnggotaProfileController::class, 'restore'])->name('news.restore');

    //Update Profile.
    Route::resource('member', MemberController::class);
    Route::get('member/{member}/edit', [MemberController::class, 'edit'])->name('member.edit');
    //Route::put('member/{member}/updateinstansi', [EventadminController::class, 'restore'])->name('updateinstansi');
    
    
    Route::put('member/{member}/restore', [EventadminController::class, 'restore'])->name('event.restore');

    Route::match(['put', 'patch'], 'member/{member}/updateinstansi', [MemberController::class, 'updateinstansi'])->name('updateinstansi');
    //Update Institusi.
    Route::resource('institusi', InstitusiController::class);
    Route::get('Institusi/{member}/edit', [InstitusiController::class, 'edit'])->name('institusi.edit');
    Route::put('member/{member}/restore', [EventadminController::class, 'restore'])->name('event.restore');

    //Update Informasi Akun.
    Route::resource('account', AccountController::class);
    Route::get('acc/email', [AccountController::class, 'email'])->name('account.email');
    Route::get('acc/password', [AccountController::class, 'password'])->name('account.password');
    Route::get('account/{member}/edit', [AccountController::class, 'edit'])->name('account.edit');
    Route::put('account/{member}/restore', [AccountController::class, 'restore'])->name('event.restore');

    Route::match(['put', 'patch'], 'member/{member}/updateemail', [MemberController::class, 'updateemail'])->name('updateemail');
    Route::match(['put', 'patch'], 'member/{member}/updatepassword', [MemberController::class, 'updatepassword'])->name('updatepassword');
    
    //Sertifikat
    Route::resource('sertifikat', SertifikatanggotaController::class);
    Route::get('sertifikat/{member}/edit', [SertifikatanggotaController::class, 'edit'])->name('sertifikat.edit');
    Route::put('member/{member}/restore', [EventadminController::class, 'restore'])->name('event.restore');

    //Payment
    Route::resource('payment', PaymentController::class);
    Route::get('payment/{payment:no_invoice}/edit', [PaymentController::class, 'edit'])->name('payment.edit');
    Route::get('payment/{payment:no_invoice}', [PaymentController::class, 'show'])->name('payment.show');
    Route::put('member/{member}/restore', [PaymentController::class, 'restore'])->name('payment.restore');

    //KTA
    Route::resource('kta', KTAController::class);
    Route::get('kta/{member}/edit', [KTAController::class, 'edit'])->name('nokta.edit');
    Route::get('kta/{member}', [KTAController::class, 'show'])->name('nokta.show');
    Route::put('kta/{member}/restore', [KTAController::class, 'restore'])->name('nokta.restore');

    //KTA Sample
    //Route::resource('profile', AnggotaProfileController::class);
    //Route::get('profile/{id}/edit', [AnggotaProfileController::class, 'edit'])->name('anggotaprofile.edit');
    //Route::put('profile/{anggota}/restore', [AnggotaProfileController::class, 'restore'])->name('news.restore');

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

//pengurus_old
//Route::prefix('pengurus')->name('pengurus.')->group(function () {
  //  route::get('/dewan-pembina', function () {
//        return Inertia::render('Pengurus/Dewan_Pembina');
//    })->name('dewan-penasehat');
//    route::get('/dewan-pengurus', function () {
//        return Inertia::render('Pengurus/Dewan_Pengurus');
  //  })->name('dewan-pengurus');
//});

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

    //Pengurus
    //Route::resource('pengurus', CommiteeController::class);
    //Route::get('pengurus/{commitee:slug}', [CommiteeController::class, 'show'])->name('commitee.show');
    //Route::get('pengurus/dewan-pembin', [CommiteeController::class, 'dewanpembina'])->name('commitee.dewanpembina');

    Route::prefix('biodata')->name('pengurus.')->group(function () {
//        route::get('/dewan-pembina', function () {
  //          return Inertia::render('Pengurus/Dewan_Pembina');
//        })->name('dewan-penasehat');
        route::get('/dewan-pengurus', function () {
            return Inertia::render('Pengurus/Dewan_Pengurus');
        })->name('dewan-pengurus');
        Route::get('/{commitee:slug}', [CommiteeController::class, 'show'])->name('commitee.show');
        
        
        
        
    });

    //Prosiding
    Route::resource('prosiding', ProsidingController::class);
    Route::get('prosiding/{prosiding:slug}', [ProsidingController::class, 'show'])->name('prosiding.show');
    Route::get('prosiding/{id}/edit', [ProsidingController::class, 'edit'])->name('prosiding.edit');

    //pengurus new
    Route::get('pengurus/dewan-pembina', [CommiteeController::class, 'dewanpembina'])->name('commitee.pembina');
    Route::get('pengurus/dewan-pengurus', [CommiteeController::class, 'dewanpengurus'])->name('commitee.pengurus');

    //News
    Route::resource('galeri', GaleriController::class);
    Route::resource('video', VideoController::class);
    //Route::get('galeri/{galeri:slug}', [GaleriController::class, 'show'])->name('news.show');
    Route::get('galeri/{id}/edit', [GaleriController::class, 'edit'])->name('galeri.edit');
    

    //News
    Route::resource('contact', ContactController::class);
    //Route::get('galeri/{galeri:slug}', [GaleriController::class, 'show'])->name('news.show');
    //Route::get('galeri/{id}/edit', [GaleriController::class, 'edit'])->name('news.edit');

    //Pengurus new
    //Route::resource('news', PengurusController::class);
    //Route::get('pengurus/{commitee:slug}', [PengurusController::class, 'show'])->name('pengurus.show');

    //NewsCategory
    //Route::resource('category', NewscategoryController::class);
    Route::get('newscategory/{newscategory:slug}', [NewscategoryController::class, 'show'])->name('newscategory.show');
    //Route::get('news/{id}/edit', [NewsControlleNewscategoryController::class, 'edit'])->name('news.edit');

    //Document
    Route::resource('dokumen', DokumenController::class);
    Route::get('dokumen/{dokumen:slug}', [DokumenController::class, 'show'])->name('dokumen.show');
    Route::get('buku/{id}/edit', [BukuController::class, 'edit'])->name('buku.edit');

    //buku
    //Route::get('buku/{buku:slug}', [BukuController::class, 'show'])->name('buku.show');
    //Event
    //Route::resource('event', EventController::class);
    Route::get('event/{event:slug}', [EventController::class, 'show'])->name('event.show');
    //Route::get('event/{id}/edit', [NewsController::class, 'edit'])->name('news.edit');
    
        //anggota.dashboard.sertifikat.index
    //Document
    Route::resource('sertifikat', SertifikatController::class);
    //Route::resource('prosiding', ProsidingController::class);
    Route::get('sertifikat/search', [SertifikatController::class,'search'])->name('sertifikat.search');
    //Route::get('prosiding/{prosiding:slug}', [ProsidingController::class, 'show'])->name('prosiding.show');

    //Keanggotaan
    Route::resource('keanggotaan', AnggotaController::class);
    //Route::get('keanggotaan/daftar', [AnggotaController::class, 'show'])->name('anggota.show');
    //Route::get('keanggotaan/{anggota:slug}', [AnggotaController::class, 'show'])->name('anggota.show');
    Route::get('pendaftaran-anggota', [AnggotaController::class, 'daftar'])->name('anggota.daftar');
    Route::get('pendaftaran-anggota/success', [AnggotaController::class, 'success'])->name('anggota.daftarsuccess');
    
    Route::get('dokumen/{dokumen:slug}', [DokumenController::class, 'show'])->name('dokumen.show');
    Route::get('buku/{id}/edit', [BukuController::class, 'edit'])->name('buku.edit');

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

//hidden Dashboard for admin credicial
//role:user
//Route::get('/dashboard', function () {
  //  return Inertia::render('Dashboard');
//})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'role:admin'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
