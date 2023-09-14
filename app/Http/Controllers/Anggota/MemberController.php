<?php

namespace App\Http\Controllers\Anggota;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\Buku;
use App\Models\Member;
use App\Models\User;
use App\Models\Commitee;
use Inertia\Inertia;
use App\Http\Requests\Member\Profile\Store;
use App\Http\Requests\Member\Profile\Update;
use App\Http\Requests\Member\Profile\Updateinstansi;
use App\Http\Requests\Member\Profile\Updateemail;
use App\Http\Requests\Member\Profile\Updatepassword;
use Storage;

class MemberController extends Controller
{
    //
    public function index(){
        $member          = Member::all();
        return Inertia::render('Anggota/Member/List',
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
    }

    public function edit(Member $member){
        //return $news;
        //return Inertia::render('Admin/News/Create');
        //return $request->all();
        //$news           = News::all();
        return Inertia::render('Anggota/Member/Edit',
        [
            'member'          => $member,
            'ckeditor'              => 'yes',
        ]);
    }

    public function update(Update $request, Member $member, User $user, Commitee $commitee){
        $data = $request->validated();
        //$data['decription'] = $data['konten'];
        $slug = Str::slug($data['nama']);
        if($request->file('img')){
            $data['img'] = Storage::disk("public")->put('profile', $request->file('img'));
            //Storage::disk("public")->delete($buku->img);
        } else {
            $data['img'] = $member->img;
        }

        //Commitee
        $data['name'] = $data['nama'];

        //id
        $id_user = $data['user_id'];
        $id_anggota = $data['anggota_id'];
        $id_com = $data['com_id'];
        
     //   $user->update($data);
       // $user->assignRole('user');
        //member
        $member->update($data);
        //$commitee->update($data);

        //commitee
        Commitee::where('id', $id_com)->update(
            [
                'nama' => $data['nama'],
                'slug' => $slug
            ],
        );

        //user
        User::where('id', $id_user)->update(
            [
                'name' => $data['nama'],
                //'email' => $data['email']
            ],
        );


        return redirect(route('anggota.dashboard.profile.index'))->with(
            [
                'message'   => "Data Anda Berhasil diperbarui",
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


    public function updateinstansi(Updateinstansi $request, Member $member, User $user, Commitee $commitee){
        $data = $request->validated();
        //$data['decription'] = $data['konten'];
        $slug = Str::slug($data['nama']);
        
        //Commitee
        $data['name'] = $data['nama'];

        //id
        $id_user = $data['user_id'];
        $id_anggota = $data['anggota_id'];
        $id_com = $data['com_id'];
        
     //   $user->update($data);
       // $user->assignRole('user');
        //member
        $member->update($data);
        //$commitee->update($data);

        //commitee
        Commitee::where('id', $id_com)->update(
            [
                'nama' => $data['nama'],
                'slug' => $slug
            ],
        );

        //user
        User::where('id', $id_user)->update(
            [
                'name' => $data['nama'],
                //'email' => $data['email']
            ],
        );


        return redirect(route('anggota.dashboard.institusi.index'))->with(
            [
                'message'   => "Data Anda Berhasil diperbarui",
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

    public function updateemail(Updateemail $request, Member $member, User $user, Commitee $commitee){
        $data = $request->validated();
        //$data['decription'] = $data['konten'];
//        $slug = Str::slug($data['nama']);
        
        //Commitee
//        $data['name'] = $data['nama'];

        //id
        $id_user = $data['user_id'];
        $id_anggota = $data['anggota_id'];
        $id_com = $data['com_id'];
        
     //   $user->update($data);
       // $user->assignRole('user');
        //member
        $member->update($data);

        //$commitee->update($data);

        //commitee
        Commitee::where('id', $id_com)->update(
            [
//                'nama' => $data['nama'],
  //              'slug' => $slug
            ],
        );


//        if($member->password !== '') {
  //          $data['password'] = Hash::make($request->password);
//        }else{
  //          $data['password'] = $member->password;
//        }
        
        //user
        User::where('id', $id_user)->update(
            [
 //               'password' => $data['password'],
                'email' => $data['email']
            ],
        );


        return redirect(route('anggota.dashboard.account.email'))->with(
            [
                'message'   => "Data Anda Berhasil diperbarui",
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

    public function updatepassword(Updatepassword $request, Member $member, User $user, Commitee $commitee){
        $data = $request->validated();
        //$data['decription'] = $data['konten'];
//        $slug = Str::slug($data['nama']);
        
        //Commitee
//        $data['name'] = $data['nama'];

        //id
        $id_user = $data['user_id'];
        $id_anggota = $data['anggota_id'];
        $id_com = $data['com_id'];
        
     //   $user->update($data);
       // $user->assignRole('user');
        //member
        $member->update($data);

        //$commitee->update($data);

        //commitee
        Commitee::where('id', $id_com)->update(
            [
//                'nama' => $data['nama'],
  //              'slug' => $slug
            ],
        );


//        if($member->password !== '') {
            $data['password'] = Hash::make($request->password);
//        }else{
  //          $data['password'] = $member->password;
//        }
        
        //user
        User::where('id', $id_user)->update(
            [
                'password' => $data['password'],
//                'email' => $data['email']
            ],
        );


        return redirect(route('anggota.dashboard.account.password'))->with(
            [
                'message'   => "Data Anda Berhasil diperbarui",
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
