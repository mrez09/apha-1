<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use App\Models\Buku;
use App\Models\Member;
use App\Models\Commitee;
use App\Models\User;
use Inertia\Inertia;
use App\Http\Requests\Admin\Member\Store;
use App\Http\Requests\Admin\Member\Update;
use Storage;
use Illuminate\Support\Facades\Mail;
use App\Mail\ReminderPembayaran;
use App\Mail\VerificationSuccess;
use App\Mail\VerificationPembayaran;

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

    public function store(Store $request)
    {
        DB::beginTransaction();
        try {
            $validated = $request->validate([
                'email'  => 'required|email|unique:members,email',
                'no_kta' => 'required|unique:members,no_kta',
                'kode'   => 'required|unique:members,kode',
                'nama'   => 'required|string|max:255',
                'jk'     => 'nullable|string|in:lk,pr',
            ], [
                'email.unique' => '⚠️ Email sudah terdaftar!',
                'no_kta.unique' => '⚠️ Nomor KTA sudah digunakan!',
                'kode.unique' => '⚠️ NIDN/NIDK sudah digunakan!',
                
            ]);

            $imgPath = $request->file('img')
            ? Storage::disk('public')->put('profile', $request->file('img'))
            : null;

            $memberData = [
                'nama'        => $validated['nama'],
                'email'       => $validated['email'],
                'no_kta'      => $validated['no_kta'],
                'kode'        => $validated['kode'],
                'jk'          => $validated['jk'] ?? null,
                'img'         => $imgPath,
                'slug_kta'    => Str::slug($validated['no_kta']),
                'kta_token' => 'APHA-' . strtoupper(Str::random(10)), // <== token unik
                'universitas' => $request->input('universitas'),
                'fakultas'    => $request->input('fakultas'),
                'alamatf'     => $request->input('alamatf'),
                'mk'          => $request->input('mk'),
                'alamat'      => $request->input('alamat'),
                'phone'       => $request->input('phone'),
                'scholar'     => $request->input('scholar'),
                'scopus'      => $request->input('scopus'),
                'sinta'       => $request->input('sinta'),
                'dec'         => $request->input('dec'),
            ];
            $member = Member::create($memberData);
            //Member::create($validated);

            
            $user = User::create([
                'name'     => $member->nama,
                'email'    => $member->email,
                'password' => Hash::make('password123'), // ubah sesuai kebijakan
                'role'     => 'member',
            ]);
            $user->assignRole('user');

            // update member -> id_user
            $member->update(['id_user' => $user->id]);
            
            //com
             $commiteeData = [
                'nama'       => $member->nama,
                'slug'       => Str::slug($member->nama),
                'img'        => $imgPath,
                'gender'     => $request->input('jk') ?? null,
                'divisi'     => 3,
                'subdivisi'  => 10,
                'jabatan'    => 17,
                'description'=> $request->input('dec') ?? null,
                'periode'    => $request->input('periode') ?? date('Y'),
                // jangan masukkan id_com di sini — nanti kita update member.id_com
            ];
            $commitee = Commitee::create($commiteeData);
            // update member -> id_com (link member ke commitee)
            $member->update(['id_com' => $commitee->id]);

             DB::commit();

            return redirect()
                ->route('admin.dashboard.member.index')
                ->with([
                    'message' => "✅ Anggota berhasil ditambahkan!",
                    'type' => "success"
                ]);
            } catch (QueryException $e) {
                if ($e->errorInfo[1] == 1062) {
                    $message = '❌ Data duplikat ditemukan.';
                    if (str_contains($e->getMessage(), 'members_email_unique')) {
                        $message = '⚠️ Email sudah terdaftar! bro';
                    } elseif (str_contains($e->getMessage(), 'members_no_kta_unique')) {
                        $message = '⚠️ Nomor KTA sudah digunakan! bro';
                    } elseif (str_contains($e->getMessage(), 'members_kode_unique')) {
                        $message = '⚠️ NIDN/NIDK sudah digunakan!';
                    }
                    $type = 'error';
                } else {
                    Log::error('Gagal menambah anggota: ' . $e->getMessage());
                    $message = '❌ Terjadi kesalahan sistem. Coba lagi nanti.';
                    $type = 'error';
                }
            }
        
            

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
        $anggota = Member::select(
        'users.id as user_id',
        'members.id as member_id',
        'members.id_com as com_id',
        'members.nama',
        'members.no_kta',
        'members.jk',
        'members.slug_kta',
        'members.kode',
        'users.email',
        'members.img',
        'members.universitas',
        'members.fakultas',
        'members.alamatf',
        'members.mk',
        'members.alamat',
        'members.phone',
        'members.scholar',
        'members.scopus',
        'members.sinta',
        'members.status',
        'members.dec',
        'members.join_at',
        'users.email_verified_at',

        // tambahkan field dari tabel lain
        'commitees.nama as nama_commitee',
        'commitees.slug as slug_biodata',
        'divisis.namadivisi as namadivisi',
        'subdivisis.namasubdivisi as namasubdivisi',
        'jabatans.namajabatan as namajabatan'
    )
    ->join('users', 'members.id_user', '=', 'users.id')
    ->leftJoin('commitees', 'members.id_com', '=', 'commitees.id')
    ->leftJoin('divisis', 'commitees.divisi', '=', 'divisis.id')
    ->leftJoin('subdivisis', 'commitees.subdivisi', '=', 'subdivisis.id')
    ->leftJoin('jabatans', 'commitees.jabatan', '=', 'jabatans.id')
    ->where('users.id', '=', $member->id_user)
    ->first();
        $commitee = Commitee::find($member->id_com);
        return Inertia::render('Admin/Member/View', [
            'member'    => $member,
            'commitee' => $commitee,
            'anggota' => $anggota,
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

    /*update old
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
        
        
        
    }*/

    public function update(Update $request, Member $member)
{
    $data = $request->validated();
    $data['slug_kta'] = Str::slug(str_replace('/', '-', $data['no_kta']));
    if (!$member->kta_token) {
        $member->kta_token = 'APHA-' . strtoupper(Str::random(10));
    }

    // ✅ Handle image upload untuk profile
    if ($request->hasFile('img')) {
        if ($member->img && Storage::disk('public')->exists($member->img)) {
            Storage::disk('public')->delete($member->img);
        }

        $data['img'] = Storage::disk('public')->put('profile', $request->file('img'));
    } else {
        unset($data['img']);
    }

    // ✅ Update data member
    $member->update($data);

    // ✅ Update data commitee terkait (jika ada id_com)
    if ($member->id_com) {
        $commitee = \App\Models\Commitee::find($member->id_com);

        if ($commitee) {
            $commitee->update([
                'nama'      => $member->nama,
                'img'       => $member->img,
                'gender'    => $request->input('jk'),
                'description' => $request->input('dec'),
            ]);
        }
    }

    return redirect(route('admin.dashboard.memberadmin.view', $member->id))
    //return redirect(route('admin.dashboard.member.index'))
    ->with([
        'message' => "✅ Member dan Commitee berhasil diupdate",
        'type' => "success"
    ]);
}

    public function destroy(Member $member){
        $member->delete();
        return redirect(route('admin.dashboard.member.index'))->with(
            [
                'message'   => "Member Berhasil diDelete",
                'type'      => "success"
            ]
            );
        
    }

    public function sendReminderBatch(Request $request)
    {
        // Ambil semua member yang belum aktif dan belum punya KTA
        $members = Member::
            //whereNull('no_kta')
            where('status', 0)
            ->get();

        foreach ($members as $member) {
            try {
                Mail::to($member->email)->send(new ReminderPembayaran($member));
            } catch (\Exception $e) {
                \Log::error("Gagal kirim reminder ke {$member->email}: " . $e->getMessage());
            }
        }

        return back()->with('message', 'Reminder berhasil dikirim ke semua anggota yang belum aktif.');
    }

    //
    public function sendReminder($id)
    {
        $member = Member::findOrFail($id);
        $user = User::findOrFail($id);

        // Pastikan hanya kirim kalau belum aktif dan belum punya KTA
        if ($member->status == 0) {
            Mail::to($member->email)->send(new ReminderPembayaran($member));
            return back()->with('message', 'Iuran Reminder berhasil dikirim ke ' . $member->email);
        }else if ($member->status == 1) {
            Mail::to($member->email)->send(new VerificationPembayaran($member));
            return back()->with('message', 'Verification Iuran berhasil dikirim ke ' . $member->email);
        }

        //dd('terpanggil', $id);
        return back()->with('error', 'Member ini sudah aktif atau sudah memiliki KTA.');
        
    }
}
