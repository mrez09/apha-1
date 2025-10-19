<?php

namespace App\Http\Controllers\Anggota;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\URL;
use App\Models\News;
use App\Models\Newscategory;
use App\Models\PaymentProof; 
use App\Models\Konfigurasi; 
use App\Models\Invoice;
use App\Models\Member;
use Inertia\Inertia;
use App\Http\Requests\Member\Payment\Store;
use App\Http\Requests\Member\Payment\Update;
use Storage;


class PaymentProofAnggotaController extends Controller
{
    //
    public function index(){

        $user_id            = Auth::user()->id;
        $order = PaymentProof::max('id');
        
        $news           = PaymentProof::all();
        $paymentjoin       = PaymentProof::select('payment_proofs.id as link_id','judul',  'no_invoice', 'status', 'proof_file', 'tanggal_bayar', 'name')->join('users','users.id',"=",'payment_proofs.id_user')->where('payment_proofs.id_user', '=', $user_id)->get();
        return Inertia::render('Anggota/Payment/List',
        [
            'payment'          => $paymentjoin,
            'order'          => $order
        ]);
      //return  [
        //    'news'          => $news,
        //];  

    }

    public function create(Request $request)
    {
        $invoice = Invoice::with('items')
            ->findOrFail($request->invoice);

        return Inertia::render('Anggota/Payment/Create', [
            'invoice' => $invoice,
        ]);
    }

    public function store(Store $request){
        //validated
        $data = $request->validated();
        $invoice = Invoice::findOrFail($request->invoice_id);

        $data['judul'] = $invoice->description;
        $data['jumlah'] = $invoice->total_amount;
        //max id
        $data['order'] = PaymentProof::max('id');
        $data['proof_file'] = Storage::disk("public")->put('payment', $request->file('proof_file'));
        //$data['path'] = "/storage/".$data['img'];
        $data['status'] = 'UNPAID';
        $data['tanggal_bayar'] = date('Y-m-d');
        $data['konten'] = '';
        $data['message'] = $data['message'];
        $data['no_invoice'] = date('ymd').$data['order'];
        $data['invoice_slug'] = date('ymd').$data['order'];
        $data['id_user'] = Auth::id();
        $news = PaymentProof::create($data);
        //dd($invoice);
    
        return redirect(route('anggota.dashboard.paymentproof.index'))->with(
            [
                'message'   => "Bukti Pembayaran Berhasil diBerikan | Harap tunggu validasi Status",
                'type'      => "success"
            ]
            );
        //return $request->all();
    }

    public function edit(PaymentProof $payment){
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

    public function show(PaymentProof $paymentproof)
    {
        $paymentproof->load([
            'invoice.items',
            'invoice.user',
            'user',
        ]);

        $member = Member::where('id_user', $paymentproof->id_user)->first();

        $invoice = $paymentproof->invoice;
        $taxRate = 0.11;
        $taxAmount = $invoice
            ? $invoice->total_amount * $taxRate
            : 0;
        $grandTotal = $invoice
            ? $invoice->total_amount + $taxAmount
            : 0;

       //     dd([
       // 'payment_id' => $paymentproof->id,
       // 'invoice_id' => $paymentproof->invoice_id,
       // 'invoice' => $paymentproof->invoice,
    //]);
            
        //dd($paymentproof->invoice);
        return Inertia::render('Anggota/Payment/Show', [
            'payment' => $paymentproof,
            'member' => $member,
            'invoice' => $invoice,
            'tax' => $taxAmount,
            'grandTotal' => $grandTotal,
        ]);
    }
}
