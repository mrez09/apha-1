<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use App\Models\News;
use App\Models\Newscategory;
use App\Models\Payment; 
use Inertia\Inertia;
use App\Http\Requests\Admin\Payment\Store;
use App\Http\Requests\Admin\Payment\Update;
use Storage;


class PaymentadminController extends Controller
{
    //
    public function index(){
        $news           = Payment::all();
        $newsjoin       = Payment::select('payments.id as link_id','judul', 'no_invoice', 'status', 'img', 'tanggal_bayar', 'name')->join('users','users.id',"=",'payments.id_user')->get();
        return Inertia::render('Admin/Payment/List',
        [
            'news'          => $newsjoin
        ]);
      //return  [
        //    'news'          => $news,
        //];  

    }

    public function create(){
        $newscategory           = Newscategory::all();
        return Inertia::render('Admin/Payment/Create',
        [
            'newscategory'          => $newscategory,
            'ckeditor'              => 'yes',
        ]);
    }

    public function store(Store $request){
        //return Inertia::render('Admin/News/Create');
        $data = $request->validated();
        $data['img'] = Storage::disk("public")->put('payment', $request->file('img'));
        //$data['path'] = "/storage/".$data['img'];
        $data['slug_judul'] = Str::slug($data ['judul']);
        $data['id_user'] = Auth::id();
        $news = Payment::create($data);

        return redirect(route('admin.dashboard.payment.index'))->with(
            [
                'message'   => "Payment Berhasil diUpdate",
                'type'      => "success"
            ]
            );
        //return $request->all();
    }

    public function show(Payment $payment){
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
    }

    public function edit(Payment $payment){
        //return $news;
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
        //$news           = News::all();
//        $newscategory           = Payment::all();
  //      $categoryget           = Payment::select('newscategories.id as newscategories_id','namakategori', 'newscategories.slug')->join('newscategories','newscategories.id',"=",'news.category')->where('newscategories.id', '=', $news->category)->first();
        return Inertia::render('Admin/Payment/Edit',
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
                'message'   => "Biodata Anda Berhasil diPerbarui",
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
                'message'   => "Berita Berhasil diDelete",
                'type'      => "success"
            ]
            );
        //return $news;
    }

}

