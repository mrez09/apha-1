<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Subdivisi;

class SubdivisiTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $subdivisi = [
            [
                'namasubdivisi'     =>  'Utama',
                'id_divisi'         =>  1,
            ],
            [
                'namasubdivisi'     =>  'Bidang Pendidikan dan Pelatihan',
                'id_divisi'         =>  2,
            ],
            [
                'namasubdivisi'     =>  'Penelitian, dan Pengembangan Hukum Adat',
                'id_divisi'         =>  2,
            ],
            [
                'namasubdivisi'     =>  'Bidang Organisasi',
                'id_divisi'         =>  2,
            ],
            [
                'namasubdivisi'     =>  'Bidang Kerjasama Antar Lembaga',
                'id_divisi'         =>  2,
            ],
            [
                'namasubdivisi'     =>  'Bidang Publikasi dan Informasi Ilmiah Hukum Adat',
                'id_divisi'         =>  2,
            ],
            [
                'namasubdivisi'     =>  'Umum',
                'id_divisi'         =>  3,
            ],
            [
                'namasubdivisi'     =>  'Kordinator',
                'id_divisi'         =>  4,
            ],
            
        ];
        Subdivisi::insert($subdivisi);
    }
}
