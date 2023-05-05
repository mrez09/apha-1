<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Galeri;

class GaleriTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $galeri = [
            [
                'name'          =>  'Gambar 1',
                'slug'          =>  'gambar-1', 
                'category'      =>  'galeri',
                'url'           =>  'https://penerbit.lshi.or.id/assets/buku/Hukum-Adat.png',
                'img'     =>  'https://penerbit.lshi.or.id/buku/hukum-adat',
                'decription'    =>  'Masyarakat hukum adat disebut juga dengan istilah “masyarakat tradisional” atau the indigenous people.',
                'is_featured'   =>  1,
            ],
            [
                'name'          =>  'Gambar 2',
                'slug'          =>  'gambar-2', 
                'category'      =>  'galeri',
                'url'           =>  'https://penerbit.lshi.or.id/assets/buku/Hukum-Adat.png',
                'img'     =>  'https://penerbit.lshi.or.id/buku/hukum-adat',
                'decription'    =>  'Masyarakat hukum adat disebut juga dengan istilah “masyarakat tradisional” atau the indigenous people.',
                'is_featured'   =>  1,
            ]
                
        ];
        Galeri::insert($galeri);
    }
}
