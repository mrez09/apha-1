<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use App\Models\Buku;
use App\Models\Member;
use App\Models\Commitee;
use Inertia\Inertia;
use App\Http\Requests\Admin\Member\Store;
use App\Http\Requests\Admin\Member\Update;
use Storage;

class MemberadminController extends Controller
{
    //
    public function index(){
        $member          = Member::all();
        return Inertia::render('Admin/Member/List',
    [
        'member'          => $member
    ]);
      //return  [
        //    'news'          => $news,
        //];  

    }

    public function create(){
        return Inertia::render('Admin/Member/Create',
        [
            
            'ckeditor'              => 'yes',
        ]);
    }

    public function store(Store $request){
        //return Inertia::render('Admin/News/Create');
        $data = $request->validated();
        $data['img'] = Storage::disk("public")->put('profile', $request->file('img'));
        //$data['path'] = "/storage/".$data['img'];
        $data['slug_kta'] = Str::slug($data ['no_kta']);
        
      //  $data['dec'] = $data ['konten'];
        //$data['id_user'] = Auth::id();
        $buku = Member::create($data);

        return redirect(route('admin.dashboard.member.index'))->with(
            [
                'message'   => "Anggota Berhasil Di tambah",
                'type'      => "success"
            ]
            );
        //return $request->all();
    }

    public function show(Member $member){
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
        $member          = Member::all();
        return Inertia::render('Admin/Member/List',
    [
        'member'          => $member
    ]);
      //return  [
        //    'news'          => $news,
        //];
    }

    public function view(Member $member)
    {
        $commitee = Commitee::find($member->id_com);
        return Inertia::render('Admin/Member/View', [
            'member'    => $member,
            'commitee' => $commitee,
            'ckeditor'  => 'yes',
        ]);
    }

    public function edit(Member $member){
        //return $news;
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
        //$news           = News::all();
        return Inertia::render('Admin/Member/Edit',
        [
            'member'          => $member,
            'ckeditor'              => 'yes',
        ]);
    }

    public function update(Update $request, Member $member){
        $data = $request->validated();
        //$data['slug_kta'] = Str::slug($data ['no_kta']);
        $data['slug_kta'] = Str::slug(str_replace('/', '-', $data['no_kta']));
        //$data['decription'] = $data['konten'];
      
        if($request->file('img')){
            $data['img'] = Storage::disk("public")->put('profile', $request->file('img'));
            //Storage::disk("public")->delete($buku->img);
        } else {
            $data['img'] = $member->img;
        }

        
        
        $member->update($data);
        return redirect(route('admin.dashboard.member.index'))->with(
            [
                'message'   => "Member Berhasil diUpdate",
                'type'      => "success"
            ]
            );
        
        
        
    }

    public function destroy(Member $member){
        $member->delete();
        return redirect(route('admin.dashboard.member.index'))->with(
            [
                'message'   => "Member Berhasil diDelete",
                'type'      => "success"
            ]
            );
        //return $news;
    }
}
