<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Sertifikat;

class SertifikatTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $sertifikat = [
            [
                'no'          =>  '014/IC-2023/P/APHA/VI/2023',
                'slug'          =>  '014/IC-2023/P/APHA/VI/2023',
                'nama'          =>  'Nama Lengkap',
                'judul'          =>  'APHA International ',
                'status'        => 'Publish',
                'id_user'      =>  '1',
                'category'           =>  '1',
                'img'     =>  'news/138o11BysELq4vLcrNdFyFpHxZomP4jbpraCoxvG.jpg',
                'link'     =>  'news/138o11BysELq4vLcrNdFyFpHxZomP4jbpraCoxvG.jpg',
                'konten'    =>  'Konferensi ini dilatar belakangi keberadaan masyarakat hukum adat (MHA) di berbagai belahan dunia dengan segala dinamika dan tantangannya terus mendorong masyarakat internasional untuk melahirkan berbagai kerangka dan norma guna memperkuat perlindungan dan pengakuan MHA. Namun demikian, tidak dapat dipungkiri bahwa konsepsi dan regulasi MHA dalam kerangka hukum internasional terus mengalami dinamika perkembangan yang menuntut negara-negara untuk melakukan penyesuaian dalam hukum domestik mereka.',
                'view'        =>  64,
                'publish_at'    =>  '2023-04-30T03:37:04.000Z',
            ],
        ];
        Sertifikat::insert($sertifikat);
    }
}
