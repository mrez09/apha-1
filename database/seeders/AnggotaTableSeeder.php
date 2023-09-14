<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Anggota;

class AnggotaTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $anggota = [
            [
                'no_kta'        =>  '01.18.02.001',
                'nama'          =>  'Dr. Laksanto Utomo, S.H., M.H',
                'slug_kta'          =>  '01-18-02-001',
                'kode'          =>  '02-202207-0724',
                'id_user'       =>  '4',
                'id_com'        =>  '1',
                'kode'          =>  '02-202207-0724',
                'jk'            =>  'lk',
                'img'           =>  'img.com',
                'universitas'   =>  'Sahid',
                'fakultas'      =>  'Hukum',
                'alamatf'       =>  'Jl. Prof. DR. Soepomo No.84, RT.7/RW.1, Menteng Dalam, Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12870',
                'mk'            =>  'Hukum Agraria dan Property, Etika Hukum Kesehatan',
                'alamat'        =>  'Jl. Abc',
                'email'         =>  'laksanto@gmail.com',
                'phone'         =>  '0878-8606-3305',
                'scholar'       =>  'https://scholar.google.co.id/citations?user=bHqq0fsAAAAJ&hl=en',
                'scopus'        =>  'https://www.scopus.com/authid/detail.uri?authorId=57215986230',
                'sinta'         =>  'https://sinta.kemdikbud.go.id/authors/profile/6074022',
                'dec'        =>  'decription',
                'pen'         =>  'pendidikan',
                'status'        =>  1,
                'is_featured'   =>  0,
                'join_at'       =>  '2023-05-05T03:40:00.000Z',
            ],
        ];
        Anggota::insert($anggota);
    
    }
}
