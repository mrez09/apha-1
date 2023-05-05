<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Buku;

class BukuTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $buku = [
            [
                'name'          =>  'Hukum Adat',
                'slug'          =>  'hukum-adat', 
                'category'      =>  'Hukum Adat',
                'url'           =>  'https://penerbit.lshi.or.id/assets/buku/Hukum-Adat.png',
                'thumbnail'     =>  'https://penerbit.lshi.or.id/buku/hukum-adat',
                'decription'    =>  'Masyarakat hukum adat disebut juga dengan istilah “masyarakat tradisional” atau the indigenous people.',
                'rating'        =>  9.2,
                'is_featured'   =>  1,
            ],
            [
                'name'          =>  'Hukum Adat',
                'slug'          =>  'hukum-adat', 
                'category'      =>  'Hukum Adat',
                'url'           =>  'https://penerbit.lshi.or.id/assets/buku/Hukum-Adat.png',
                'thumbnail'     =>  'https://penerbit.lshi.or.id/buku/hukum-adat',
                'decription'   =>  'Masyarakat hukum adat disebut juga dengan istilah “masyarakat tradisional” atau the indigenous people.',
                'rating'        =>  9.2,
                'is_featured'   =>  1,
            ],
            [
                'name'          =>  'Hukum Adat',
                'slug'          =>  'legal-audit-legal-opinion', 
                'category'      =>  'Hukum Audit',
                'url'           =>  'https://penerbit.lshi.or.id/assets/buku/Hukum-Adat.png',
                'thumbnail'     =>  'https://penerbit.lshi.or.id/buku/hukum-adat',
                'decription'   =>  'Masyarakat hukum adat disebut juga dengan istilah “masyarakat tradisional” atau the indigenous people.',
                'rating'        =>  9.2,
                'is_featured'   =>  0,
            ],
            [
                'name'          =>  'Hukum Adat',
                'slug'          =>  'hukum-adat-3', 
                'category'      =>  'Hukum Adat 3',
                'url'           =>  'https://penerbit.lshi.or.id/assets/buku/Hukum-Adat.png',
                'thumbnail'     =>  'https://penerbit.lshi.or.id/buku/hukum-adat',
                'decription'   =>  'Masyarakat hukum adat disebut juga dengan istilah “masyarakat tradisional” atau the indigenous people.',
                'rating'        =>  9.2,
                'is_featured'   =>  0,
            ]
                
        ];
        Buku::insert($buku);
    }
}
