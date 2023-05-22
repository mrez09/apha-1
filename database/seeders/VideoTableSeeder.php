<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Video;

class VideoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $video = [
            [
                'name'          =>  'KONFLIK TANAH ADAT MASYARAKAT ADAT KARUHUN URANG: KRISIS PENGAKUAN HAK ULAYAT',
                'slug'          =>  '2n10iokocwioottnlxaletfeoxpwel4fgjoropmrul7cgste3fnidzm', 
                'category'      =>  'youtube',
                'url'           =>  'https://www.youtube.com/watch?v=Pd_BuSlIHgA',
                'img'     =>  '',
                'decription'    =>  'Konflik Tanah Adat Masyarakat Adat Karuhun Urang',
                'is_featured'   =>  1,
                'created_at'    => '2023-04-01 16:48:12'
            ],
            
                
        ];
        Video::insert($video);
    }
}
