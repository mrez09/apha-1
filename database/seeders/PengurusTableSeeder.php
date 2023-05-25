<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Pengurus;

class PengurusTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $pengurus = [
            [
                'nama'          =>  'Prof. Dr. H. Aminuddin Salle, SH, MH',
                'nip'           =>  '', 
                'nik'           =>  '',
                'img'           =>  '',
                'divisi'        =>  '1',
                'subdivisi'     =>  '1',
                'jabatan'       =>  '1',
                'email'         =>  'aminudin@apha.or.id',
                'phone'         =>  '+62123456789',
                'description'   =>  'Prof. Dr. H. Aminuddin Salle, S.H., M.H. adalah sGuru Besar Hukum Adat dan Hukum Agraria di Fakultas hukum Universitas Hansanuddin lahir pada tanggal 2 Juli 1948. Tepat pada tanggal 2 Juli 2022 lalu, Prof. Dr. H. Aminuddin Salle, S.H., M.H. telah bertambah usia dengan memasuki usia 74 Tahun.  Pada usia 74 Tahun, sebagai mahasiswa Prof tidaklah membesar-besarkan gagasan hukum beliau yang mengemas hukum adat dan nilai kearifan lokal menjadi lebih kekinian tanpa meninggalkan nilai alamiah dari hukum adat.',
                'pendidikan'    =>  '',
                'periode'        =>  '1',
                'is_featured'   =>  1,
                'join_at'       =>  '2023-05-05T03:40:00.000Z',
            ],
        ];
        Pengurus::insert($pengurus);
    }
}
