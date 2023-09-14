<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\URL;
use App\Models\Sertifikat;
use App\Models\Konfigurasi;
use Illuminate\Support\Str;
use Storage;

class SertifikatController extends Controller
{
    //
    public function index()
    {
        //dd(request('search'));
        //return Inertia::render('Buku/List');
        //$featuredNews   = News::whereIsFeatured(true)->get();
        //$news           = News::where('news.status', '=', 'Publish')->orderBy('publish_at', 'desc')->get();
        $sertifikat       = Sertifikat::where('sertifikats.status', '=', 'Publish')->orderBy('publish_at', 'desc')->get();
        //$newsp          = News::where('news.status', '=', 'Publish')->orderBy('publish_at', 'desc')->paginate(6);
        $konfigurasis     = Konfigurasi::where('konfigurasis.id', '=', 1)->first();
        //$news_p         = News::paginate(15);

        //meta
        $reptag1    = Str::replace('<p>', '', $konfigurasis->metatag);
        $metatag    = Str::replace('</p>', '', $reptag1);
        //url saat ini
        $cururl     = URL::current();
        return inertia ('Sertifikat/List',[
            //'featuredNews'  => $featuredNews,
            'sertifikat'          => $sertifikat,
            //'newsp'          => $newsp,
            
        ]);
        /*return  [
            'featuredNews' => $featuredNews,
            'news'          => $news,
        ];*/
    }

    public function search(Request $request){
        if($request->has('search')){
            $sertifikat = Sertifikat::where('nama', 'LIKE', '%'.$request->search.'%')->get();
        }
        else{
            $sertifikat = Sertifikat::all();
        }

        return inertia ('Sertifikat/List',[
            //'featuredNews'  => $featuredNews,
            'sertifikat'          => $sertifikat,
            //'newsp'          => $newsp,
            
        ]);
    }
}
