<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Banner;

class BannerTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $banner = [
            [
                'name'          =>  'Kongres Apha 2023',
                'slug'          =>  '2y10ixwenqvbiapzmmqbvsdcuxxmk1z0qjscaiyrslafuqribqczosm', 
                'category'      =>  'Banner',
                'url'           =>  '',
                'img'     =>  'galeri/PzSVNAUQw02erfwIl8HXnw77WGgFrPMjJJoO80bJ.png',
                'decription'    =>  '<p>Kongres Apha</p>',
                'is_featured'   =>  1,
                'created_at'    => '2023-04-01 16:48:12'
            ],
            [
                'name'          =>  'Selamat Datang di Website',
                'slug'          =>  '2y10istyov9sgqzik7uvfbszweklvsqllwflki99oetdmr3vm7bdne', 
                'category'      =>  'MainBanner',
                'url'           =>  '',
                'img'     =>  'mainbanner/xCLjulxqjtrTssLBJ0CUHeveBGf20o1mhMLFnXVc.png',
                'decription'    =>  '<p>Asosiasi Pengajar Hukum Adat</p>',
                'is_featured'   =>  1,
                'created_at'    => '2023-04-01 16:48:12'
            ],
                
        ];
        Banner::insert($banner);
    }
}
