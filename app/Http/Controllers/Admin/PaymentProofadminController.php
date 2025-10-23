<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\URL;
use App\Models\Konfigurasi;
use App\Models\PaymentProof;
use App\Models\Payment;
use App\Models\Member;
use App\Models\Invoice; 
use Inertia\Inertia;
use App\Http\Requests\Admin\Payment\Store;
use App\Http\Requests\Admin\Payment\Update;
use Storage;
use Illuminate\Support\Facades\DB;


class PaymentProofadminController extends Controller
{
    //
    public function index(){
        $news           = PaymentProof::all();
        $newsjoin       = PaymentProof::select('payment_proofs.id as link_id','judul', 'no_invoice', 'status', 'proof_file', 'tanggal_bayar', 'name')->join('users','users.id',"=",'payment_proofs.id_user')->get();
        return Inertia::render('Admin/Paymentproof/List',
        [
            'news'          => $newsjoin
        ]);
      //return  [
        //    'news'          => $news,
        //];  

    }

    public function create(){
        $newscategory           = Newscategory::all();
        return Inertia::render('Admin/Paymentproof/Create',
        [
            'newscategory'          => $newscategory,
            'ckeditor'              => 'yes',
        ]);
    }

    public function store(Store $request){
        //return Inertia::render('Admin/News/Create');
        $data = $request->validated();
        $data['proof_file'] = Storage::disk("public")->put('payment', $request->file('proof_file'));
        //$data['path'] = "/storage/".$data['img'];
        //$data['slug_judul'] = Str::slug($data ['judul']);
        $data['id_user'] = Auth::id();
        $news = PaymentProof::create($data);

        return redirect(route('admin.dashboard.paymentproof.index'))->with(
            [
                'message'   => "Payment Berhasil diUpdate",
                'type'      => "success"
            ]
            );
        //return $request->all();
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
        return Inertia::render('Admin/Paymentproof/Show', [
            'payment' => $paymentproof,
            'member' => $member,
            'invoice' => $invoice,
            'tax' => $taxAmount,
            'grandTotal' => $grandTotal,
        ]);
    }

    public function edit(Payment $payment){
        //return $news;
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
        //$news           = News::all();
//        $newscategory           = Payment::all();
  //      $categoryget           = Payment::select('newscategories.id as newscategories_id','namakategori', 'newscategories.slug')->join('newscategories','newscategories.id',"=",'news.category')->where('newscategories.id', '=', $news->category)->first();
        return Inertia::render('Admin/Paymentproof/Edit',
        [
            'payment'          => $payment,
            'ckeditor'              => 'yes',
        ]);
    }
    
    public function update(Update $request, Payment $payment){
        $data = $request->validated();
        //$data['slug'] = Str::slug($data ['no_kta']);
        if($request->file('img')){
            $data['img'] = Storage::disk("public")->put('profile', $request->file('img'));
            Storage::disk("public")->delete($payment->img);
        } else {
            $data['img'] = $payment->img;
        }



        //$path = Storage::url('public');

        //$img = '<img src"' .$path.'" alt=""/>';

        $payment->update($data);
        return redirect(route('admin.dashboard.payment.index'))->with(
            [
                'message'   => "Payment Berhasil diPerbarui",
                'type'      => "success"
            ]
        );
        
        
//        return $request->all();
        //return $news;
        //return Inertia::render('Admin/News/Create');
        
        //$news           = News::all();
        //return Inertia::render('Admin/News/Edit',
        //[
          //  'news'          => $news
        //]);
    }

    public function destroy(Payment $payment){
        $payment->delete();
        return redirect(route('admin.dashboard.payment.index'))->with(
            [
                'message'   => "Payment Berhasil diDelete",
                'type'      => "success"
            ]
            );
        //return $news;
    }

    public function approve($id)
    {
        $payment = PaymentProof::findOrFail($id);
        $invoice = Invoice::findOrFail($payment->invoice_id);
        DB::transaction(function () use ($payment, $invoice) {
            $payment->update([
                'status' => 'approved',
                'approved_by' => auth()->id(),
                'approved_at' => now(),
            ]);

            $oldStatus = $invoice->status;
            $invoice->update([
                'status' => 'paid',
                'paid_at' => now(),
                'method' => 'manual',
            ]);
            $invoice->logs()->create([
                'user_id'      => $invoice->user_id,
                'performed_by' => auth()->id(),
                'action'       => 'payment_proof_approved',
                'description'  => 'Bukti pembayaran manual disetujui',
                'old_status'   => $oldStatus,
                'new_status'   => 'paid',
                'ip_address'   => request()->ip(),
            ]);

        });

        return back()->with([
            'message' => 'Pembayaran berhasil disetujui.',
            'type' => 'success',
        ]);
    }

    public function reject($id)
    {
        $payment = PaymentProof::findOrFail($id);
        $invoice = Invoice::findOrFail($payment->invoice_id);
        DB::transaction(function () use ($payment, $invoice) {
            $payment->update([
                'status' => 'rejected',
                'rejected_by' => auth()->id(),
                'rejected_at' => now(),
                //'message' => 'Maaf File ini tidak disetujui.',
            ]);

            $oldStatus = $invoice->status;
            $payment->update([
                'status' => 'rejected',
                'rejected_by' => auth()->id(),
                'rejected_at' => now(),
            ]);
            $payment->invoice->logs()->create([
                'user_id' => $payment->id_user,
                'performed_by' => auth()->id(),
                'action' => 'payment_proof_rejected',
                'description' => 'Bukti pembayaran manual ditolak',
                'ip_address' => request()->ip(),
            ]);

        });

        return back()->with([
            'message' => 'Pembayaran berhasil disetujui.',
            'type' => 'success',
        ]);
    }

}

