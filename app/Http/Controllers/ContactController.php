<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Contact;
use App\Models\News;
use App\Models\Konfigurasi;
use App\Http\Requests\Contact\Store;
use Storage;

class ContactController extends Controller
{
    //
    public function index()
    {
        //$news           = News::all();
        $konfigurasis           = Konfigurasi::where('konfigurasis.id', '=', 1)->first();
        return inertia ('Contact',[
            'event' => [
                'application-name'          => $konfigurasis->namawebsite,
                'title'                     => 'Kontak Kami Asosiasi Pengajar Hukum Adat (APHA) Indonesia',
                'description'               => $konfigurasis->description,
                'keywords'                  => $konfigurasis->metatag,
                'image'                     => 'https://i.imgur.com/R4DyCBa.png',
                'image_alt'                 => 'Kontak Kami Asosiasi Pengajar Hukum Adat (APHA) Indonesia',
                'image_type'                => 'image/jpeg',
                'image_width'               => '1800',
                'image_height'              => '550',
                'og:type'                   => 'website',
                'url'                       => $konfigurasis->address,
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
