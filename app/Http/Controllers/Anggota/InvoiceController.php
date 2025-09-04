<?php

namespace App\Http\Controllers\Anggota;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\URL;
use App\Models\News;
use App\Models\Newscategory;
use App\Models\Invoice; 
use App\Models\Konfigurasi; 
use Inertia\Inertia;
use App\Http\Requests\Member\Invoices\Store;
use App\Http\Requests\Member\Invoices\Update;
use Storage;

class InvoiceController extends Controller
{
    //
    public function index(){

        $user_id            = Auth::user()->id;
        $order = Invoice::max('id');
        //$anggota           = Payment::select('users.id as user_id','members.id as anggota_id','id_com as com_id' , 'nama', 'no_kta', 'jk', 'kode', 'users.email', 'img', 'universitas', 'fakultas', 'alamatf', 'mk', 'alamat', 'phone', 'scholar', 'scopus', 'sinta', 'status', 'dec', 'join_at')->join('users','members.id_user',"=",'users.id')->where('members.id_user', '=', $user_id)->first();

        $invoice           = Invoice::all();
        $invoicejoin       = Invoice::select( 'invoices.id as link_id', 'user_id', 'invoice_number', 'amount', 'method', 'gateway', 'status', 'payment_type', 'description', 'proof', 'paid_at')->join('users','users.id',"=",'invoices.user_id')->where('invoices.user_id', '=', $user_id)->get();
        return Inertia::render('Anggota/Invoice/List',
        [
            'news'          => $invoicejoin,
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

    public function store(Request $request)
{
    $request->validate([
        'payment_type' => 'required',
        'amount' => 'required|numeric|min:1000',
    ]);

    $invoice = Invoice::create([
        'user_id' => auth()->id(),
        'invoice_number' => 'INV-' . strtoupper(Str::random(8)),
        'payment_type' => $request->payment_type,
        'amount' => $request->amount,
        'status' => 'pending',
        'method' => 'manual',
        'gateway' => 'manual',
    ]);

    return redirect()->route('member.invoice.show', $invoice->id)
        ->with('success', 'Invoice berhasil dibuat, silakan upload bukti transfer.');
    }

    public function edit(Payment $payment){
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

    public function show(Payment $payment){
        //url saat ini
        $cururl           = URL::current();
        $konfigurasis     = Konfigurasi::where('konfigurasis.id', '=', 1)->first();
        $paymentjoin      = Payment::select('payments.id as link_id','judul', 'subjudul', 'no_invoice',  'payments.status', 'payments.img', 'tanggal_bayar', 'nama', 'alamat', 'konten')->join('members','members.id_user',"=",'payments.id_user')->where('payments.no_invoice', '=', $payment->no_invoice)->first();
        //$tanggal_print    = date('d-m-Y');
        $tanggal_print    = date('l d M Y ');
        
       
        //Parse Data
       //$repkonten1    = Str::replace('<p>', '', $buku->sinopsis);
       //$repkonten2    = Str::replace('</p>', '', $repkonten1);
       //$des    = Str::words( $repkonten2, 25);

       //$reptag1    = Str::replace('<p>', '', $konfigurasis->metatag);
       //$metatag    = Str::replace('</p>', '', $reptag1);

       //$cururl     = URL::current();
       return Inertia::render('Anggota/Payment/Show', [
           'payment'        => $paymentjoin,
           'tanggal_print'  => $tanggal_print,
           'pay'            => $payment,
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
       //return Inertia::render('Admin/News/Create');
       //return $request->all();
   }
}
