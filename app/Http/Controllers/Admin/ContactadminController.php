<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use App\Models\Contact;
use Inertia\Inertia;
use App\Http\Requests\Admin\Contact\Store;
use App\Http\Requests\Admin\Contact\Update;
use Storage;

class ContactadminController extends Controller
{
    //
    public function index(){
        $contact           = Contact::all();
        return Inertia::render('Admin/Contact/List',
    [
        'contact'          => $contact
    ]);
      //return  [
        //    'news'          => $news,
        //];  

    }

    public function update(Update $request, Contact $contact){
        $data = $request->validated();
        $data['read'] = '1';
  //      $data['slug'] = Str::slug($data ['name']);
//        if($request->file('img')){
  //          $data['thumbnail'] = Storage::disk("public")->put('buku', $request->file('img'));
            //Storage::disk("public")->delete($buku->img);
 //       } else {
   //         $data['img'] = $buku->img;
   //     }

        
        
        $contact->update($data);
        return redirect(route("admin.dashboard.contact.detail",contact.id))->with(
            [
                'message'   => "Contact Sudah Dibaca",
                'type'      => "success"
            ]
            );
        
        
        //kreturn $update->all();
        //return $news;
        //return Inertia::render('Admin/News/Create');
        
        //$news           = News::all();
        //return Inertia::render('Admin/News/Edit',
        //[
          //  'news'          => $news
        //]);
    }


    public function show(Contact $contact){
        return Inertia::render('Admin/Contact/Show', ['contact' => $contact]);
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
    }

    

}
