<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\URL;
use App\Models\Buku;
use App\Models\Anggota;
use App\Models\Member;
use App\Models\User;
use App\Models\Commitee;
use App\Models\Konfigurasi;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\Member\Anggota\Store;
use App\Http\Requests\Member\Anggota\Update;
use Storage;

class AnggotaController extends Controller
{
    //
    public function index()
    {
        //return Inertia::render('Buku/List');
        $featuredBuku   = Buku::whereIsFeatured(true)->limit(3)->get();
        $anggota        = Buku::orderBy('id', 'desc')->get();
        $bukup          = Buku::where('bukus.status', '=', 1)->orderBy('id', 'desc')->paginate(6);
        $konfigurasis           = Konfigurasi::where('konfigurasis.id', '=', 1)->first();
        //url saat ini
        $cururl     = URL::current();

        return inertia ('Pendaftaran-anggota/List',[
            'featuredBuku'  => $featuredBuku,
            'anggota'          => $anggota,
            'bukup'          => $bukup,
            'event' => [
                'application-name'          => $konfigurasis->namawebsite,
                'title'                     => 'Pendaftaran Anggota Asosiasi Pengajar Hukum Adat (APHA)',
                'description'               => $konfigurasis->description,
                'keywords'                  => $konfigurasis->metatag,
                'image'                     => 'https://i.imgur.com/R4DyCBa.png',
                'image_alt'                 => 'Pendaftaran Anggota Asosiasi Pengajar Hukum Adat (APHA)',
                'image_type'                => 'image/jpeg',
                'image_width'               => '1800',
                'image_height'              => '550',
                'og:type'                   => 'website',
                'url'                       => $cururl,
                'fb:app_id'                 => $konfigurasis->fbid,
                'theme-color'               => '#ff6300',
                'mobile-web-app-capable'    => 'yes',
                'apple-mobile-web-app-title'=> $konfigurasis->apple_mobile,
                'card'                      => 'summary_large_image',
            ]
        ]);
        /*return  [
            'featuredBuku' => $featuredBuku,
            'buku'          => $buku,
        ];*/
    }

    public function daftar()
    {
        //$news           = News::all();
        //$featuredBuku   = Buku::whereIsFeatured(true)->limit(3)->get();
        $id_com = Commitee::max('id') + 1;
        $featuredBuku   = Buku::whereIsFeatured(true)->limit(3)->get();
        $anggota           = Buku::orderBy('id', 'desc')->get();
        $bukup          = Buku::where('bukus.status', '=', 1)->orderBy('id', 'desc')->paginate(6);
        $konfigurasis           = Konfigurasi::where('konfigurasis.id', '=', 1)->first();
        //url saat ini
        $cururl     = URL::current();

        //foto
        

        return inertia ('Pendaftaran-anggota/Create',[
            'max_id'        => $id_com,
            'featuredBuku'  => $featuredBuku,
            'anggota'          => $anggota,
            'bukup'          => $bukup,
            'event' => [
                'application-name'          => $konfigurasis->namawebsite,
                'title'                     => 'Pendaftaran Anggota Asosiasi Pengajar Hukum Adat (APHA)',
                'description'               => $konfigurasis->description,
                'keywords'                  => $konfigurasis->metatag,
                'image'                     => 'https://i.imgur.com/R4DyCBa.png',
                'image_alt'                 => 'Pendaftaran Anggota Asosiasi Pengajar Hukum Adat (APHA)',
                'image_type'                => 'image/jpeg',
                'image_width'               => '1800',
                'image_height'              => '550',
                'og:type'                   => 'website',
                'url'                       => $cururl,
                'fb:app_id'                 => $konfigurasis->fbid,
                'theme-color'               => '#ff6300',
                'mobile-web-app-capable'    => 'yes',
                'apple-mobile-web-app-title'=> $konfigurasis->apple_mobile,
                'card'                      => 'summary_large_image',
            ]
        ]);
    }

    public function store(Store $request){
        //return Inertia::render('Admin/News/Create');
        $data = $request->validated();
        //$data['id_user'] = Auth::id();

        //foto
        $data['img'] = Storage::disk("public")->put('profile', $request->file('img'));
        
        //Commitee
        $id_com = Commitee::max('id') + 1;
        $id_user = User::max('id') + 1;


        $data['id_com'] = $id_com;
        $data['id_user'] = $id_user;
        $data['slug'] = Str::slug($data['nama']);
        $data['divisi'] = 3;
        $data['subdivisi'] = 1;
        $data['jabatan'] = 12;
        $data['periode'] = 1;
        $data['join_at'] = date('Y-m-d H:i:s');;

        //Commitee
        $data2['nama'] = $data['nama'];
        $data2['gender'] = $data['jk'];
        $data2['divisi'] = 2;
        $data2['subdivisi'] = 10;
        $data2['jabatan'] = 10;
        $data2['slug'] = Str::slug($data['nama']);
        $data2['periode'] = 1;
        $data2['is_featured'] = 0;
        $data2['img'] = Storage::disk("public")->put('profile', $request->file('img'));

        //$data['slug_kta'] = Str::slug($data['nama']);
        $data['name'] = $data['nama'];
        $data['password'] = Hash::make($request->password);

        $user = User::create($data);
        $user->assignRole('user');
        $Anggota = Member::create($data);
        $commitee = Commitee::create($data2);

        
        
        
        
        return redirect(route('frontkeanggotaan.index'))->with(
            [
                'message'   => "Data Anda Sudah Diajukan, Anda Sudah Bisa Login untuk Mengetahui Status Anda. | Terima Kasih ",
                'type'      => "success"
            ]
            );
        return $request->all();
    }

    public function show(Anggota $anggota){
        //url saat ini
//        $cururl     = URL::current();
  //      $konfigurasis           = Konfigurasi::where('konfigurasis.id', '=', 1)->first();
//       //Parse Data
  //     $repkonten1    = Str::replace('<p>', '', $anggota->sinopsis);
//       $repkonten2    = Str::replace('</p>', '', $repkonten1);
  //     $des    = Str::words( $repkonten2, 25);

//       $reptag1    = Str::replace('<p>', '', $konfigurasis->metatag);
  //     $metatag    = Str::replace('</p>', '', $reptag1);

//       $cururl     = URL::current();
  //     return Inertia::render('Buku/Show', [
//           'anggota' => $anggota,
  //         'event' => [
//               'application-name'          => $konfigurasis->namawebsite,
  //             'title'                     => $anggota->name,
    //           'description'               => $des,
      //         'keywords'                  => $metatag,
        //       'image'                     => 'https://apha.or.id/storage/'.$anggota->thumbnail,
//               'image_type'                => 'image/jpeg',
  //             'image_width'               => '250',
    //           'image_height'              => '550',
      //         'image_alt'                 => $anggota->name,
        //       'og:type'                   => 'book',
//               'publish_time'              => $anggota->publish_at,
  //             'article_tag'               => 'Hukum Adat, APHA, Asosisasi Pengajar Hukum Adat',
    //           'url'                       => $cururl,
      //         'fb:app_id'                 => $konfigurasis->fbid,
        //       'theme-color'               => '#ff6300',
//               'mobile-web-app-capable'    => 'yes',
  //             'apple-mobile-web-app-title'=> $anggota->name,
    //           'card'                      => 'summary_large_image',
      //     ]
        //   ]
//       );
       //return Inertia::render('Admin/News/Create');
       //return $request->all();
   }

   
    
    
}
