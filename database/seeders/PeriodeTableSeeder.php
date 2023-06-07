<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Periode;

class PeriodeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $periode = [
            [
                'namaperiode'    =>  '2020-2023',
            ],
            
        ];
        Periode::insert($periode);
    }
}
