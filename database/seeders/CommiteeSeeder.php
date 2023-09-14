<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Commitee;

class CommiteeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $commitee = [
            [
                'nama'          =>  'Prof. Dr. H. Aminuddin Salle, SH, MH',
                'slug'           =>  'slug-1',
                'img'           =>  '',
                'email'         =>  '',
                'phone'         =>  '',
                'divisi'        =>  '1',
                'subdivisi'     =>  '1',
                'jabatan'       =>  '1',
                'description'   =>  'Prof. Dr. H. Aminuddin Salle, S.H., M.H. adalah sGuru Besar Hukum Adat dan Hukum Agraria di Fakultas hukum Universitas Hansanuddin lahir pada tanggal 2 Juli 1948. Tepat pada tanggal 2 Juli 2022 lalu, Prof. Dr. H. Aminuddin Salle, S.H., M.H. telah bertambah usia dengan memasuki usia 74 Tahun.  Pada usia 74 Tahun, sebagai mahasiswa Prof tidaklah membesar-besarkan gagasan hukum beliau yang mengemas hukum adat dan nilai kearifan lokal menjadi lebih kekinian tanpa meninggalkan nilai alamiah dari hukum adat.',
                'periode'        =>  '1',
                'is_featured'   =>  1,
                'join_at'       =>  '2023-05-05T03:40:00.000Z',
            ],
        ];
        Commitee::insert($commitee);
    }
}
