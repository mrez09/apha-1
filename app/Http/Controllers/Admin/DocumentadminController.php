<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use App\Models\Dokumen;
use App\Models\News;
use App\Models\Newscategory;
use Inertia\Inertia;
use App\Http\Requests\Admin\Document\Store;
use App\Http\Requests\Admin\Document\Update;
use Storage;

class DocumentadminController extends Controller
{
    //
    public function index(){
        $document           = Dokumen::all();
        return Inertia::render('Admin/Document/List',
        [
            'document'          => $document
        ]);
      //return  [
        //    'news'          => $news,
        //];  

    }

    public function create(){
        $document           = Dokumen::all();
        return Inertia::render('Admin/Document/Create',
    [
        'document'          => $document
    ]);
    }

    public function store(Store $request){
        //return Inertia::render('Admin/News/Create');
        $data = $request->validated();
        $data['file'] = Storage::disk("public")->put('file', $request->file('file'));
        //$data['path'] = "/storage/".$data['img'];
        $data['view'] = 0;
        $data['slug'] = Str::slug($data ['title']);
        $document = Dokumen::create($data);

        return redirect(route('admin.dashboard.document.index'))->with(
            [
                'message'   => "Document Berhasil diSimpan",
                'type'      => "success"
            ]
            );
        //return $request->all();
    }

    public function show(Dokumen $document){
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
    }

    public function edit(Dokumen $document){
        //return $news;
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
        //$news           = News::all();
        //$newscategory           = Dokumen::all();
        //$categoryget           = News::select('newscategories.id as newscategories_id','namakategori', 'newscategories.slug')->join('newscategories','newscategories.id',"=",'news.category')->where('newscategories.id', '=', $news->category)->first();
        return Inertia::render('Admin/Document/Edit',
        [
            'document'          => $document,
          //  'newscategory'          => $newscategory,
            //'categoryget'          => $categoryget
        ]);
    }

    public function update(Update $request, Dokumen $document){
        $data = $request->validated();
        $data['slug'] = Str::slug($data ['title']);
        if($request->file('file')){
            $data['file'] = Storage::disk("public")->put('file', $request->file('file'));
            Storage::disk("public")->delete($document->file);
        } else {
            $data['file'] = $document->file;
        }

        //$path = Storage::url('public');

        //$img = '<img src"' .$path.'" alt=""/>';

        $document->update($data);
        return redirect(route('admin.dashboard.document.index'))->with(
            [
                'message'   => "Document Berhasil diUpdate",
                'type'      => "success"
            ]
            );
        
        
        //return $request->all();
        //return $news;
        //return Inertia::render('Admin/News/Create');
        
        //$news           = News::all();
        //return Inertia::render('Admin/News/Edit',
        //[
          //  'news'          => $news
        //]);
    }
}
