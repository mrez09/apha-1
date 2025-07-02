<?php

namespace App\Http\Controllers\Anggota;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\URL;
use App\Models\News;
use App\Models\Newscategory;
use App\Models\Payment;
use App\Models\Member; 
use App\Models\Konfigurasi; 
use Inertia\Inertia;
use App\Http\Requests\Member\Payment\Store;
use App\Http\Requests\Member\Payment\Update;
use Storage;

class KtaController extends Controller
{
    //
    public function index(){

        $user_id            = Auth::user()->id;
        $order = Payment::max('id');
        //$anggota           = Payment::select('users.id as user_id','members.id as anggota_id','id_com as com_id' , 'nama', 'no_kta', 'jk', 'kode', 'users.email', 'img', 'universitas', 'fakultas', 'alamatf', 'mk', 'alamat', 'phone', 'scholar', 'scopus', 'sinta', 'status', 'dec', 'join_at')->join('users','members.id_user',"=",'users.id')->where('members.id_user', '=', $user_id)->first();

        $news           = Payment::all();
        $newsjoin       = Member::select('members.id as link_id', 'no_kta', 'nama', 'slug_kta', 'id_user', 'id_com', 'kode', 'jk', 'img')->join('users','users.id',"=",'members.id_user')->where('members.id_user', '=', $user_id)->first();
        return Inertia::render('Anggota/KTA/Profile',
        [
            'news'          => $newsjoin,
            'order'          => $order
        ]);
      //return  [
        //    'news'          => $news,
        //];  

    }

    public function show(Member $member){
        //url saat ini
        $cururl           = URL::current();
        $konfigurasis     = Konfigurasi::where('konfigurasis.id', '=', 1)->first();
        //   $paymentjoin      = Payment::select('payments.id as link_id','judul', 'subjudul', 'no_invoice',  'payments.status', 'payments.img', 'tanggal_bayar', 'nama', 'alamat', 'konten')->join('members','members.id_user',"=",'payments.id_user')->where('payments.no_invoice', '=', $member->no_invoice)->first();
        $memberjoin       = Member::select('members.id as link_id','no_kta', 'nama', 'slug_kta', 'members.id_user', 'id_com', 'members.img', 'universitas', 'members.status')->join('users','users.id',"=",'members.id_user')->where('members.slug_kta', '=', $member->slug_kta)->first();
        //$tanggal_print    = date('d-m-Y');
        $tanggal_print    = date('l d M Y ');
        
       
        //Parse Data
       //$repkonten1    = Str::replace('<p>', '', $buku->sinopsis);
       //$repkonten2    = Str::replace('</p>', '', $repkonten1);
       //$des    = Str::words( $repkonten2, 25);
    
       //$reptag1    = Str::replace('<p>', '', $konfigurasis->metatag);
       //$metatag    = Str::replace('</p>', '', $reptag1);
    
       //$cururl     = URL::current();
       return Inertia::render('Anggota/KTA/Show', [
           'payment'        => $memberjoin,
           'tanggal_print'  => $tanggal_print,
           'member'         => $member,
           //'event' => [
             //  'application-name'          => $konfigurasis->namawebsite,
               //'title'                     => $buku->name,
        //       'description'               => $des,
          //     'keywords'                  => $metatag,
            //   'image'                     => 'https://apha.or.id/storage/'.$buku->thumbnail,
           //    'image_type'                => 'image/jpeg',
      //         'image_width'               => '250',
        //       'image_height'              => '550',
          //     'image_alt'                 => $buku->name,
            //   'og:type'                   => 'book',
     //          'publish_time'              => $buku->publish_at,
       //        'article_tag'               => 'Hukum Adat, APHA, Asosisasi Pengajar Hukum Adat',
       //        'url'                       => $cururl,
       //        'fb:app_id'                 => $konfigurasis->fbid,
       //        'theme-color'               => '#ff6300',
         //      'mobile-web-app-capable'    => 'yes',
      //           'apple-mobile-web-app-title'=> $buku->name,
      //         'card'                      => 'summary_large_image',
        //   ]
           ]
       );
    }
}
