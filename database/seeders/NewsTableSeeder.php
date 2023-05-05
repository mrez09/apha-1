<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\News;

class NewsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $news = [
            [
                'judul'          =>  'Hukum Adat',
                'slug'          =>  'hukum-adat', 
                'id_user'      =>  'Hukum Adat',
                'category'           =>  'news',
                'tag'           =>  'apha',
                'img'     =>  'https://penerbit.lshi.or.id/buku/hukum-adat',
                'konten'    =>  'Masyarakat hukum adat disebut juga dengan istilah “masyarakat tradisional” atau the indigenous people.',
                'view'        =>  100,
                'is_featured'   =>  1,
            ],
            [
                'judul'          =>  'Hukum Adat',
                'slug'          =>  'hukum-adat', 
                'id_user'      =>  'Hukum Adat',
                'category'           =>  'news',
                'tag'           =>  'apha',
                'img'     =>  'https://penerbit.lshi.or.id/buku/hukum-adat',
                'konten'    =>  'Masyarakat hukum adat disebut juga dengan istilah “masyarakat tradisional” atau the indigenous people.',
                'view'        =>  100,
                'is_featured'   =>  1,
            ],
              
        ];
        News::insert($news);
    }
}
