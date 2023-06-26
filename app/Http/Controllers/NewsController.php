<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\URL;
use App\Models\News;
use App\Models\Konfigurasi;
use Illuminate\Support\Str;
use Storage;




class NewsController extends Controller
{
    //
    
    public function index()
    {
        
        //return Inertia::render('Buku/List');
        $featuredNews   = News::whereIsFeatured(true)->get();
        $news           = News::where('news.status', '=', 'Publish')->orderBy('publish_at', 'desc')->get();
        $konfigurasis           = Konfigurasi::where('konfigurasis.id', '=', 1)->first();
        //url saat ini
        $cururl     = URL::current();
        return inertia ('News/List',[
            'featuredNews'  => $featuredNews,
            'news'          => $news,
            'event' => [
                'application-name'          => $konfigurasis->namawebsite,
                'title'                     => 'Berita Terkini Asosiasi Pengajar Hukum Adat (APHA) Indonesia',
                'description'               => $konfigurasis->description,
                'keywords'                  => $konfigurasis->metatag,
                'image'                     => 'https://i.imgur.com/R4DyCBa.png',
                'image_alt'                 => 'Berita Terkini Asosiasi Pengajar Hukum Adat (APHA) Indonesia',
                'image_type'                => 'image/jpeg',
                'image_width'               => '1800',
                'image_height'              => '550',
                'og:type'                   => 'website',
                'url'                       => $cururl,
                'fb:app_id'                 => $konfigurasis->fbid,
                'theme-color'               => '#ff6300',
                'mobile-web-app-capable'    => 'yes',
                'apple-mobile-web-app-title'=> $konfigurasis->apple_mobile,
                'card'                      => 'summary_large_image',
            ]
        ]);
        /*return  [
            'featuredNews' => $featuredNews,
            'news'          => $news,
        ];*/
    }

    public function show(News $news){
        $news->increment('view');
        $konfigurasis           = Konfigurasi::where('konfigurasis.id', '=', 1)->first();
        //$newsjoin           = News::findOrFail($news);
        //$newsjoin           = News::select('news.id as link_id','judul', 'view', 'namakategori', 'img', 'name', 'newscategories.id as id_cat')->join('users','users.id',"=",'news.id_user')->join('newscategories','newscategories.id',"=",'news.category')->where('news.slug', $news->slug)->get();
        //$konten       = Str::inlineMarkdown($news->konten);
        $repkonten1    = Str::replace('<p>', '', $news->konten);
        $repkonten2    = Str::replace('</p>', '', $repkonten1);
        $des    = Str::words( $repkonten2, 25);

        $reptag1    = Str::replace('<p>', '', $konfigurasis->metatag);
        $metatag    = Str::replace('</p>', '', $reptag1);
        
        $newsjoin           = News::select('news.id as link_id', 'newscategories.slug as slug_category', 'judul', 'view', 'namakategori', 'img', 'name', 'newscategories.id as id_cat')->join('users','users.id',"=",'news.id_user')->join('newscategories','newscategories.id',"=",'news.category')->where('news.slug', $news->slug)->find($news->id);
        $newsterkait        = News::select('news.id as link_id', 'newscategories.slug as slug_category', 'news.slug as slug_news', 'judul' , 'img', 'publish_at')->join('newscategories','newscategories.id',"=",'news.category')->where('news.category', $news->category)->limit(3)->whereNot('news.slug', $news->slug)->orderBy('publish_at', 'desc')->get();
        $newsterkaitget     = News::select('news.id as link_id', 'newscategories.slug as slug_category', 'news.slug as slug_news', 'judul' , 'img', 'publish_at')->join('newscategories','newscategories.id',"=",'news.category')->where('news.category', $news->category)->limit(3)->whereNot('news.slug', $news->slug)->orderBy('publish_at', 'desc')->count();
        //url saat ini
        $cururl     = URL::current();
        return Inertia::render('News/Show', [
            'news' => $news,
            'newsterkait' => $newsterkait, 
            'newsjoin' => $newsjoin,
            'newsterkaitget' => $newsterkaitget,
            'event' => [
                'application-name'          => $konfigurasis->namawebsite,
                'title'                     => $news->judul,
                'description'               => $des,
                'keywords'                  => $metatag,
                'image'                     => 'https://apha.or.id/storage/'.$news->img,
                'image_type'                => 'image/jpeg',
                'image_width'               => '1800',
                'image_height'              => '550',
                'image_alt'                 => $news->judul,
                'og:type'                   => 'article',
                'publish_time'              => $news->publish_at,
                'article_tag'               => 'Hukum Adat, APHA, Asosisasi Pengajar Hukum Adat',
                'url'                       => $cururl,
                'fb:app_id'                 => $konfigurasis->fbid,
                'theme-color'               => '#ff6300',
                'mobile-web-app-capable'    => 'yes',
                'apple-mobile-web-app-title'=> $konfigurasis->apple_mobile,
                'card'                      => 'summary_large_image',
            ]
        ]);
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
    }


    
}
