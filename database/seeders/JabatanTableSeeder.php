<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Jabatan;

class JabatanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $jabatan = [
            [
                'namajabatan'     =>  'Ketua Umum',
                'id_subdivisi'      =>  1,
            ],
            [
                'namajabatan'     =>  'Ketua',
                'id_subdivisi'      =>  2,
            ],
            [
                'namajabatan'     =>  'Wakil Ketua ',
                'id_subdivisi'         =>  1,
            ],
            [
                'namajabatan'     =>  'Sekretaris',
                'id_subdivisi'         =>  1,
            ],
            [
                'namajabatan'     =>  'Wakil Sekretaris',
                'id_subdivisi'         =>  1,
            ],
            [
                'namajabatan'     =>  'Bendahara',
                'id_subdivisi'         =>  1,
            ],
            [
                'namajabatan'     =>  'Wakil Bendahara',
                'id_subdivisi'         =>  1,
            ],
            [
                'namajabatan'     =>  'Korwil Indonesia Barat',
                'id_subdivisi'         =>  2,
            ],
            [
                'namajabatan'     =>  'Korwil Indonesia Tengah',
                'id_subdivisi'         =>  2,
            ],
            [
                'namajabatan'     =>  'Korwil Indonesia Timur',
                'id_subdivisi'         =>  2,
            ],
            [
                'namajabatan'     =>  'Direktur Eksekutif',
                'id_subdivisi'         =>  2,
            ],
            [
                'namajabatan'     =>  'Anggota',
                'id_subdivisi'         =>  2,
            ],
            
        ];
        Jabatan::insert($jabatan);
    }
}
