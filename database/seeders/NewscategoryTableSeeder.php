<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Newscategory;

class NewscategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $newscategory = [
            [
                'namakategori'    =>  'Umum',
                'slug'    =>  'umum',
            ],
            [
                'namakategori'    =>  'Hukum Adat',
                'slug'    =>  'hukum-adat',
            ],
            
        ];
        Newscategory::insert($newscategory);
    }
}
