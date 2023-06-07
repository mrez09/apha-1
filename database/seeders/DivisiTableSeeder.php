<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Divisi;

class DivisiTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $divisi = [
            [
                'namadivisi'    =>  'Dewan Penasehat',
            ],
            [
                'namadivisi'    =>  'Dewan Pengurus',
            ],
            
        ];
        Divisi::insert($divisi);
    }
}
