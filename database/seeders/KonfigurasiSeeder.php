<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Konfigurasi;

class KonfigurasiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $konfigurasi = [
            [
                'namawebsite'          =>  'APHA',
                'title'          =>  'Selamat Datang di Website APHA Indonesia',
                'description'          =>  'Asosiasi Pengajar Hukum Adat Indonesia adalah badan/wadah Pendidikan Nasional yang memiliki wewenang dalam mengkordinasikan dan membina segala kegiatan pendidikan di seluruh wilayah Hukum Negara Kesatuan Republik Indonesia', 
                'apple_mobile'      =>  'Selamat Datang di Website APHA Indonesia',
                'slug'           =>  'apha',
                'tagline'           =>  'Menjaga Adat dan Budaya Kita Bersama',
                'address'           =>  'https://www.apha.or.id',
                'fbid'           =>  '961443805039846',
                'img'     =>  'logo/Logo-Apha.gif',
                'metatag'           =>  '<p>Asosiasi Pengajar Hukum Adat, Hukum Adat, Buku, Prosiding</p>',
                'pengurus'    =>  '1',
                'fav'        =>  'fav/Logo-Apha.gif',
                
            ],
            
        ];
        Konfigurasi::insert($konfigurasi);
    }
}
