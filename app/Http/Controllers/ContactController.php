<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Contact;
use App\Models\News;
use App\Http\Requests\Contact\Store;
use Storage;

class ContactController extends Controller
{
    //
    public function index()
    {
        //$news           = News::all();
    return inertia ('Contact');
    }
    
    public function store(Store $request){
        //return Inertia::render('Admin/News/Create');
        $data = $request->validated();
        //$data['id_user'] = Auth::id();
        $Contact = Contact::create($data);
        
        return redirect(route('frontcontact.index'))->with(
            [
                'message'   => "Pesan Anda Sudah di Sampaikan Ke Admin. Harap Tunggu balasan dari kami. | Terima Kasih",
                'type'      => "success"
            ]
            );
        //return $request->all();
    }
}
