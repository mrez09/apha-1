<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use App\Models\Buku;
use App\Models\Member;
use App\Models\User;
use App\Models\Sertifikat;
use App\Models\Newscategory;
use Inertia\Inertia;
use App\Http\Requests\Admin\Sertifikat\Store;
use App\Http\Requests\Admin\Sertifikat\Update;
use Storage;
use App\Helpers\ImagekitHelper;
use chillerlan\QRCode\{QRCode, QROptions};

class SertifikatadminController extends Controller
{
    //
    public function index(){
        $sertifikat          = Sertifikat::all();
        return Inertia::render('Admin/Sertifikat/List',
    [
        'sertifikat'          => $sertifikat
    ]);
      

    }

    public function show(Sertifikat $sertifikat){
        //url saat ini
        
        //$memberjoin       = Member::select('members.id as link_id','no_kta', 'nama', 'slug_kta', 'members.id_user', 'id_com', 'members.img', 'members.img_kta', 'universitas', 'members.status')->join('users','users.id',"=",'members.id_user')->where('members.slug_kta', '=', $member->slug_kta)->first();
        $sertijoin = Sertifikat::select(
                'sertifikats.id',
                'no',
                'slug',
                'serti_token',
                'nama',
                'judul',
                'sertifikats.id_user',
                'category',
                'img',
                'link',
                'konten',
                'view',
                'publish_at',
                'expired_date',
            )
            ->join('users', 'users.id', '=', 'sertifikats.id_user')
            ->where('sertifikats.id', $sertifikat->id)
            ->first();
            $tanggal_print    = date('l d M Y ');

            // URL verifikasi KTA
            //$verifyUrl = route('frontverify.kta', ['token' => $member->kta_token]);
            $verifyUrl = 'https://apha.or.id/sertifikat/verifikasi/' . $sertifikat->serti_token;


            $options = new QROptions([
            'outputType'  => QRCode::OUTPUT_IMAGE_PNG,
            'imageBase64' => true,
            'eccLevel'    => QRCode::ECC_L, // atau M
            'scale'       => 5,
            ]);
            $dataUri = (new QRCode($options))->render($verifyUrl);
            
        
            
        return Inertia::render('Admin/Sertifikat/Show', [
            'auth' => auth()->user(),
            'serti'         => $sertijoin,
            'tanggal_print' => $tanggal_print,
            'sertifikat'    => $sertifikat,
            'qrcode'        => $dataUri,
            ]
        );  
    }

    public function create(){
        $newscategory           = User::all();
        return Inertia::render('Admin/Sertifikat/Create',
        [
            'newscategory'         => $newscategory,
            'ckeditor'              => 'yes',
        ]);
    }

    public function store(Store $request){
        

        $data = $request->validated();
        /* Image Kit */
        if ($request->has('img')) {
            $data['img'] = $request->img; // langsung simpan URL
        }
        
        $data['slug'] = Str::slug($data['no']);
        //$data['serti_token'] = 'APHA-' . strtoupper(Str::random(10));
        $prefix = match ($data['category']) {
            'Seminar'       => 'SMR',
            'Workshop'      => 'WKS',
            'Pelatihan'     => 'PLT',
            'Webinar'       => 'WEB',
            'Narasumber'    => 'SPK',
            'Moderator'     => 'MOD',
            'Panitia'       => 'COM',
            'Pemateri'      => 'INS',
            'Keanggotaan'   => 'MEM',
            'Penghargaan'   => 'AWD',
            default         => 'GEN',
        };

        $data['serti_token'] = 'APHA-' . $prefix . '-' . date('Y') . '-' . strtoupper(Str::random(6));
        //$verifyUrl = route('frontverify.kta', ['token' => $token]);
        //$dataUri = (new QRCode($options))->render($verifyUrl);
        //$cururl = URL::current();

        //$member = Member::where('kta_token', $token)->first();

        
        //dd($data);
        $sertifikat = Sertifikat::create($data);

        return redirect(route('admin.dashboard.sertifikat.index'))->with(
            [
                'message'   => "Sertifikat Berhasil Di tambah",
                'type'      => "success"
            ]
            );
        //return $request->all(); untuk debug
    }

    public function edit(Sertifikat $sertifikat){
        
        //$newscategory           = Dokumen::all();
        //$categoryget           = News::select('newscategories.id as newscategories_id','namakategori', 'newscategories.slug')->join('newscategories','newscategories.id',"=",'news.category')->where('newscategories.id', '=', $news->category)->first();
        $sertifikat = Sertifikat::with('user')->findOrFail($sertifikat->id);
        $usercategory           = User::all();
        return Inertia::render('Admin/Sertifikat/Edit',
        [
            'sertifikat'            => $sertifikat,
            'usercategory'          => $usercategory,
            
        ]);
    }

  public function update(update $request, Sertifikat $sertifikat)
{
    $data = $request->validated();

    $data['slug'] = Str::slug($data['judul']);

    // kalau ada img baru → replace
    if ($request->has('img')) {
        $data['img'] = $request->input('img');
    } else {
        $data['img'] = $sertifikat->img;
    }

    $sertifikat->update($data);

    return redirect()
        ->route('admin.dashboard.sertifikat.index')
        ->with([
        'message' => 'Sertifikat berhasil diupdate',
        'type'    => 'success',
    ]);
}

    public function destroy(Sertifikat $sertifikat){
        $dokumen->delete();
        return redirect(route('admin.dashboard.sertifikat.index'))->with(
            [
                'message'   => "Sertifikat Berhasil diDelete",
                'type'      => "success"
            ]
            );
        
    }
}
