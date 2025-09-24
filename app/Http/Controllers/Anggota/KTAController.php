<?php

namespace App\Http\Controllers\Anggota;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\URL;
use App\Models\News;
use App\Models\Commitee;
use App\Models\Newscategory;
use App\Models\Payment;
use App\Models\Member; 
use App\Models\Konfigurasi; 
use Inertia\Inertia;
use App\Http\Requests\Member\Payment\Store;
use App\Http\Requests\Member\Payment\Update;
use Storage;
use chillerlan\QRCode\{QRCode, QROptions};


class KTAController extends Controller
{
    //
    public function index(){

        $user_id            = Auth::user()->id;
        $order = Payment::max('id');
        //$anggota           = Payment::select('users.id as user_id','members.id as anggota_id','id_com as com_id' , 'nama', 'no_kta', 'jk', 'kode', 'users.email', 'img', 'universitas', 'fakultas', 'alamatf', 'mk', 'alamat', 'phone', 'scholar', 'scopus', 'sinta', 'status', 'dec', 'join_at')->join('users','members.id_user',"=",'users.id')->where('members.id_user', '=', $user_id)->first();

        $news           = Payment::all();
        $newsjoin       = Member::select('members.id as link_id', 'no_kta', 'nama', 'slug_kta', 'id_user', 'id_com', 'kode', 'jk', 'img', 'img')->join('users','users.id',"=",'members.id_user')->where('members.id_user', '=', $user_id)->first();
        return Inertia::render('Anggota/KTA/Profile',
        [
            'news'          => $newsjoin,
            'order'          => $order
        ]);
      //return  [
        //    'news'          => $news,
        //];  

    }

    public function create(){
        //$newscategory           = Newscategory::all();
        $tanggal_print = date('Y-m-d');
        return Inertia::render('Anggota/Payment/Create',
        
        [
            //'newscategory'          => $newscategory,
            'tanggal_print'         => 'tanggal_print',
            'ckeditor'              => 'yes',
        ]);
    }

    public function store(Store $request){
        //return Inertia::render('Admin/News/Create');
        
        //validated
        $data = $request->validated();
        //max id
        $data['order'] = Payment::max('id');
        $data['img'] = Storage::disk("public")->put('payment', $request->file('img'));
        $data['img_kta'] = Storage::disk("public")->put('payment', $request->file('img'));
        //$data['path'] = "/storage/".$data['img'];
        $data['status'] = 'UNPAID';
        $data['tanggal_bayar'] = date('Y-m-d');
        $data['konten'] = '';
        //$data['message'] = $data['message'];
        
        $data['no_invoice'] = date('ymd').$data['order'];
        
        $data['slug_judul'] = Str::slug($data ['no_invoice']);
        $data['id_user'] = Auth::id();
        $news = Payment::create($data);

        return redirect(route('anggota.dashboard.payment.index'))->with(
            [
                'message'   => "Bukti Pembayaran Berhasil diBerikan | Harap tunggu validasi Status",
                'type'      => "success"
            ]
            );
        //return $request->all();
    }

    public function edit(Member $member){
      //return $news;
      //return Inertia::render('Admin/News/Create');
      //return $request->all();
      //$news           = News::all();
//        $newscategory           = Payment::all();
//      $categoryget           = Payment::select('newscategories.id as newscategories_id','namakategori', 'newscategories.slug')->join('newscategories','newscategories.id',"=",'news.category')->where('newscategories.id', '=', $news->category)->first();
      return Inertia::render('Anggota/Payment/Edit',
      [
          'payment'          => $payment,
          'ckeditor'              => 'yes',
      ]);
  }

  public function show(Member $member){
    //url saat ini
    $cururl        = URL::current();
    $konfigurasis  = Konfigurasi::find(1);
    
    //$memberjoin       = Member::select('members.id as link_id','no_kta', 'nama', 'slug_kta', 'members.id_user', 'id_com', 'members.img', 'members.img_kta', 'universitas', 'members.status')->join('users','users.id',"=",'members.id_user')->where('members.slug_kta', '=', $member->slug_kta)->first();
    $memberjoin = Member::select(
            'members.id as link_id',
            'no_kta',
            'nama',
            'slug_kta',
            'kta_token',
            'members.id_user',
            'id_com',
            'members.img',
            'members.img_kta',
            'universitas',
            'members.status'
        )
        ->join('users', 'users.id', '=', 'members.id_user')
        ->where('members.slug_kta', $member->slug_kta)
        ->first();
    $tanggal_print    = date('l d M Y ');

    // URL verifikasi KTA
    $verifyUrl = route('frontverify.kta', ['token' => $member->kta_token]);

    $options = new QROptions([
      'outputType'  => QRCode::OUTPUT_IMAGE_PNG,
      'imageBase64' => true,
      'eccLevel'    => QRCode::ECC_L, // atau M
      'scale'       => 5,
    ]);
    $dataUri = (new QRCode($options))->render($verifyUrl);
      
   
    
   return Inertia::render('Anggota/KTA/Show', [
       'payment'        => $memberjoin,
       'tanggal_print'  => $tanggal_print,
       'member'         => $member,
       'qrcode' => $dataUri,
       ]
   );  
  }

  public function verify($token)
{
    $pengurusget = Commitee::select(
        'commitees.id as commitees_id',
        'subdivisis.id as subdivisi_id',
        'commitees.slug',
        'commitees.nama',
        'commitees.img',
        'divisis.namadivisi',
        'subdivisis.namasubdivisi',
        'jabatans.namajabatan',
        'commitees.description',
        'members.no_kta',
        'members.jk',
        'members.status',
        'members.universitas',
        'members.fakultas',
        'members.scopus as link_scopus',
        'members.scholar as link_scholar',
        'members.sinta as link_sinta'
    )
        ->leftJoin('divisis', 'divisis.id', '=', 'commitees.divisi')
        ->leftJoin('subdivisis', 'subdivisis.id', '=', 'commitees.subdivisi')
        ->leftJoin('jabatans', 'jabatans.id', '=', 'commitees.jabatan')
        ->leftJoin('periodes', 'periodes.id', '=', 'commitees.periode')
        ->leftJoin('members', 'members.id_com', '=', 'commitees.id')
        ->where('members.kta_token', $token)
        ->first();

        // Antisipasi kalau $pengurusget null
        if (!$pengurusget) {
            abort(404, 'Data pengurus tidak ditemukan.');
        }

        // --- Meta section ---
        $descriptionText = $pengurusget->description ?? '';
        $repkonten1 = Str::replace('<p>', '', $descriptionText);
        $repkonten2 = Str::replace('</p>', '', $repkonten1);
        $des = Str::words($repkonten2, 25);

        $reptag1 = Str::replace('<p>', '', $konfigurasis->metatag ?? '');
        $metatag = Str::replace('</p>', '', $reptag1);

         $options = new QROptions([
      'outputType'  => QRCode::OUTPUT_IMAGE_PNG,
      'imageBase64' => true,
      'eccLevel'    => QRCode::ECC_L, // atau M
      'scale'       => 5,
    ]);
    // URL verifikasi KTA
    $verifyUrl = route('frontverify.kta', ['token' => $token]);
    $dataUri = (new QRCode($options))->render($verifyUrl);
        $cururl = URL::current();

    $member = Member::where('kta_token', $token)->first();

    if (!$member) {
        abort(404, 'KTA tidak valid atau tidak ditemukan');
    }

    return Inertia::render('Anggota/KTA/Verify', [
        'commitee' => $pengurusget,
            'event' => [
                'application-name'           => $konfigurasis->namawebsite ?? 'APHA',
                'title'                      => $pengurusget->nama ?? 'Pengurus',
                'description'                => $des,
                'keywords'                   => $metatag,
                'image'                      => $pengurusget->img 
                    ? 'https://apha.or.id/storage/' . $pengurusget->img
                    : 'https://apha.or.id/default-thumbnail.jpg',
                'image_type'                 => 'image/jpeg',
                'image_width'                => '1800',
                'image_height'               => '550',
                'image_alt'                  => $pengurusget->nama ?? '',
                'og:type'                    => 'profile',
                'firstname'                  => $pengurusget->nama ?? '',
                'publish_time'               => $pengurusget->publish_at ?? now(),
                'article_tag'                => 'Hukum Adat, APHA, Asosiasi Pengajar Hukum Adat',
                'url'                        => $cururl,
                'fb:app_id'                  => $konfigurasis->fbid ?? '',
                'theme-color'                => '#ff6300',
                'mobile-web-app-capable'     => 'yes',
                'apple-mobile-web-app-title' => $pengurusget->nama ?? '',
                'card'                       => 'summary_large_image',
                'member'                     => $member,
                'qrcode' => $dataUri,
            ]
    ]);
}


  //end
  public function namecard(Member $member){
    $this->authorize('view', $member);
 
    //url saat ini
    $cururl           = URL::current();
    $konfigurasis     = Konfigurasi::where('konfigurasis.id', '=', 1)->first();
    //   $paymentjoin      = Payment::select('payments.id as link_id','judul', 'subjudul', 'no_invoice',  'payments.status', 'payments.img', 'tanggal_bayar', 'nama', 'alamat', 'konten')->join('members','members.id_user',"=",'payments.id_user')->where('payments.no_invoice', '=', $member->no_invoice)->first();
    $memberjoin = Member::select(
        'members.id as link_id',
        'no_kta',
        'slug_kta',
        'members.id_user',
        'id_com',
        'members.img',
        'members.img_kta',
        'universitas',
        'members.status',
        'commitees.slug as commitee_slug' // <--- tambahkan ini
    )
    ->join('users', 'users.id', '=', 'members.id_user')
    ->leftJoin('commitees', 'commitees.id', '=', 'members.id_com') // <--- join ke tabel commitees
    ->where('members.slug_kta', '=', $member->slug_kta)
    ->first();
    //$tanggal_print    = date('d-m-Y');
    $tanggal_print    = date('l d M Y ');

    //$verifyUrl = route('frontpengurus.commitee.show', ['commitee' => $member->slug]);
    //frontindex
    $frontUrl = route('frontindex');
    $verifyUrl = route('frontpengurus.commitee.show', [
        'commitee' => $memberjoin->commitee_slug,
    ]);
    //"frontpengurus.commitee.show", props.commitee.slug"
    $options = new QROptions([
      'outputType'  => QRCode::OUTPUT_IMAGE_PNG,
      'imageBase64' => true,
      'eccLevel'    => QRCode::ECC_L, // atau M
      'scale'       => 5,
    ]);

    $dataUri = (new QRCode($options))->render($verifyUrl);
    $dataUri2 = (new QRCode($options))->render($frontUrl);
    
   
   return Inertia::render('Anggota/KTA/Namecard', [
       'payment'        => $memberjoin,
       'tanggal_print'  => $tanggal_print,
       'member'         => $member,
       'qrcode'         => $dataUri,
       'qrcodebase'     => $dataUri2,
       ]
   );  
  }
}
