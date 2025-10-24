<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    */

    'required' => ':attribute wajib diisi.',

    'email' => ':attribute harus berupa email yang valid.',

    'unique' => ':attribute sudah digunakan.',

    'exists' => ':attribute tidak ditemukan.',

    'min' => [
        'string' => ':attribute minimal :min karakter.',
        'numeric' => ':attribute minimal :min.',
    ],

    'max' => [
        'string' => ':attribute maksimal :max karakter.',
        'numeric' => ':attribute maksimal :max.',
    ],

    'confirmed' => 'Konfirmasi :attribute tidak cocok.',

    'same' => ':attribute harus sama dengan :other.',

    'custom' => [

        'phone' => [
            'required' => 'Harap isi Nomor Telepon yang belum digunakan.',
            'unique' => 'Nomor telepon ini sudah terdaftar.',
        ],

        'alamat' => [
            'required' => 'Harap isi Alamat terlebih dahulu.',
        ],
        
        'img' => [
            'required' => 'Harap Upload Photo terlebih dahulu.',
        ],

        'jk' => [
            'required' => 'Harap pilih Gender anda.',
        ],

        'email' => [
            'required' => 'Email wajib diisi.',
            'unique' => 'Email tersebut sudah digunakan.',
        ],

        'universitas' => [
            'required' => 'Harap Masukan Universitas Tempat Anda Mengabdi.',
        ],

        'fakultas' => [
            'required' => 'Harap Masukan Fakultas Tempat Anda Mengabdi.',
        ],

        'alamatf' => [
            'required' => 'Alamat Fakultas Tempat Anda Mengabdi Wajib diisi.',
        ],

        'mk' => [
            'required' => 'Mata Kuliah Wajib diisi | Jika Lebih dari satu harap gunakan tanda koma',
        ],

    ],

    'attributes' => [

        // Login
        'email' => 'Email',
        'password' => 'Password',

        // User
        'name' => 'Nama',
        'firstname' => 'Nama depan',
        'lastname' => 'Nama belakang',
        
        // Member
        'nama' => 'Nama',
        'phone' => 'Harap Isi Nomor Telepon yang belum digunakan',
        'address' => 'Alamat',
        'birth_date' => 'Tanggal lahir',
        'kode'      => 'NIDN/NIDK',

        // Contact
        'subject' => 'Subjek',
        'message' => 'Pesan',

        // Payment
        'proof_file' => 'Bukti pembayaran',
        

    ],

];