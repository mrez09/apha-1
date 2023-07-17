<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Staticpage;

class StaticpageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $staticpage = [
            [
                'judul'         =>  'Badan Hukum',
                'slug'          =>  'badan-hukum',
                'guid'          =>  '?page_id=1', 
                'id_user'       =>  '1',
                //'category'      =>  '1',
                'status'        =>  '1',
                'img'           =>  '',
                'file'          =>  'file/Akte-Apha.pdf',
                'description'        =>  '<p>About</p>',
                'view'          =>  64,
                'menu_order'    =>  0,
                'post_type'     =>  'page',
                'publish_at'    =>  '2023-04-30T03:37:04.000Z',
            ],
            [
                'judul'         =>  'Sejarah Asosiasi Pengajar Hukum Adat',
                'slug'          =>  'sejarah-asosiasi-pengajar-hukum-adat',
                'guid'          =>  '?page_id=2', 
                'id_user'       =>  '1',
                //'category'      =>  '1',
                'status'        =>  '1',
                'img'           =>  '',
                'file'          =>  '',
                'description'        =>  '<p>About</p>',
                'view'          =>  64,
                'menu_order'    =>  0,
                'post_type'     =>  'page',
                'publish_at'    =>  '2023-04-30T03:37:04.000Z',
            ],
            [
                'judul'         =>  'SK Pengurus',
                'slug'          =>  'sk-pengurus',
                'guid'          =>  '?page_id=3', 
                'id_user'       =>  '1',
                //'category'      =>  '1',
                'status'        =>  '1',
                'img'           =>  '',
                'file'          =>  '',
                'description'        =>  '<embed
                type="application/pdf"
                src="https://penerbit.lshi.or.id/assets/image/apha/File/Pengurus-APHA.pdf"
                width="800"
                height="800"
            ></embed>',
                'view'          =>  64,
                'menu_order'    =>  0,
                'post_type'     =>  'page',
                'publish_at'    =>  '2023-04-30T03:37:04.000Z',
            ],
        ];
        Staticpage::insert($staticpage);
    }
}
