<?php

namespace App\Http\Controllers\Anggota;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
//use App\Models\Anggota;
use App\Models\Member;
use App\Models\News;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\Member\Anggota\Store;
use App\Http\Requests\Member\Anggota\Update;
use Storage;

class ProfileController extends Controller
{
    //
    public function index(){
        
        //$anggota        = auth.user.id;
        //$data = $request->session()->all();
        $user_id            = Auth::user()->id;
        //asli
//        $anggota           = Member::select('users.id as user_id','members.id as anggota_id', 'nama', 'no_kta', 'jk', 'kode', 'users.email', 'img', 'universitas', 'fakultas', 'alamatf', 'mk', 'alamat', 'phone', 'scholar', 'scopus', 'sinta', 'status', 'dec', 'join_at')->join('users','members.id_user',"=",'users.id')->where('members.id_user', '=', $user_id)->first();
        //baru
        $anggota           = Member::select('users.id as user_id','members.id as anggota_id','id_com as com_id' , 'nama', 'no_kta', 'jk', 'slug_kta', 'kode', 'users.email', 'img', 'universitas', 'fakultas', 'alamatf', 'mk', 'alamat', 'phone', 'scholar', 'scopus', 'sinta', 'status', 'dec', 'join_at')->join('users','members.id_user',"=",'users.id')->where('members.id_user', '=', $user_id)->first();

        //$status           = Anggota::select('users.id as user_id','name', 'email')->join('anggotas','anggotas.id_user',"=",'users.user_id')->where('users.user_id', '=', 12)->first();
        $status           = Member::select('users.id as user_id', 'members.id as anggota_id', 'nama', 'users.email', 'status')->join('users','members.id_user',"=",'users.id')->where('users.id', '=', $user_id)->first();
        return Inertia::render('Anggota/Profile/List',
        [
            'status'          => $status,
            'user_id'          => $user_id,
            'anggota'          => $anggota,
            'ckeditor'              => 'yes',
        ]);
    }

    public function show(Anggota $anggota){
      //return Inertia::render('Admin/News/Create');
      //return $request->all();
  }


  public function edit(Member $news){
    //$categoryget           = News::select('newscategories.id as newscategories_id','namakategori', 'newscategories.slug')->join('newscategories','newscategories.id',"=",'news.category')->where('newscategories.id', '=', $news->category)->first();
    return Inertia::render('Anggota/Profile/List',
    [
        'anggota'                 => $news,

        'ckeditor'              => 'yes',
    ]);
}

    public function update(Update $request, Member $member){
        $data = $request->validated();
        //$data['slug'] = Str::slug($data ['no_kta']);
        if($request->file('img')){
            $data['img'] = Storage::disk("public")->put('profile', $request->file('img'));
            Storage::disk("public")->delete($member->img);
        } else {
            $data['img'] = $member->img;
        }

        if($request->file('img_kta')){
            $data['img_kta'] = Storage::disk("public")->put('profile', $request->file('img_kta'));
            Storage::disk("public")->delete($member->img_kta);
        } else {
            $data['img_kta'] = $member->img_kta;
        }




        $member->update($data);
        return redirect(route('anggota.dashboard.profile.index'))->with(
            [
                'message'   => "Biodata Anda Berhasil diPerbarui",
                'type'      => "success"
            ]
        );
        
        

    }

    public function imgkta(){
        
        $user_id            = Auth::user()->id;
        $anggota           = Member::select('users.id as user_id','members.id as anggota_id','id_com as com_id' , 'nama', 'no_kta', 'jk', 'slug_kta', 'kode', 'users.email', 'img', 'img_kta', 'universitas', 'fakultas', 'alamatf', 'mk', 'alamat', 'phone', 'scholar', 'scopus', 'sinta', 'status', 'dec', 'join_at')->join('users','members.id_user',"=",'users.id')->where('members.id_user', '=', $user_id)->first();

        //$status           = Anggota::select('users.id as user_id','name', 'email')->join('anggotas','anggotas.id_user',"=",'users.user_id')->where('users.user_id', '=', 12)->first();
        $status           = Member::select('users.id as user_id', 'members.id as anggota_id', 'nama', 'users.email', 'status')->join('users','members.id_user',"=",'users.id')->where('users.id', '=', $user_id)->first();
        return Inertia::render('Anggota/Profile/ImgKTA',
        [
            'status'          => $status,
            'user_id'          => $user_id,
            'anggota'          => $anggota,
            'ckeditor'              => 'yes',
        ]);
    }

    public function updateimgkta(Update $request, Member $member){
        $data = $request->validated();
        //$data['slug'] = Str::slug($data ['no_kta']);
        if($request->file('img')){
            $data['img'] = Storage::disk("public")->put('profile', $request->file('img'));
            Storage::disk("public")->delete($member->img);
        } else {
            $data['img'] = $member->img;
        }

        if($request->file('img_kta')){
            $data['img_kta'] = Storage::disk("public")->put('profile', $request->file('img_kta'));
            Storage::disk("public")->delete($member->img_kta);
        } else {
            $data['img_kta'] = $member->img_kta;
        }



        //$path = Storage::url('public');

        //$img = '<img src"' .$path.'" alt=""/>';

        $member->update($data);
        return redirect(route('anggota.dashboard.profile.index'))->with(
            [
                'message'   => "Biodata Anda Berhasil diPerbarui",
                'type'      => "success"
            ]
        );
        
        

    }
}
