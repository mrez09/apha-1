<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Event;

class EventdateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $event = [
            [
                'judul'         =>  'APHA International Conference & Call for Papers',
                'subjudul'      =>  'APHA International Conference & Call for Papers adalah',
                'slug'          =>  'apha-international-conference-call-for-papers', 
                'id_user'       =>  '1',
                'tag'           =>  'APHA, International Conference, Call for Papers',
                'img'           =>  'https://apha.or.id/storage/news/oizAJWH9QvHrugtrsu12hrGWaijPP4Fa905EtBzr.jpg',
                'description'        =>  'Majelis Permusyawaratan Rakyat (MPR RI) bekerjasama dengan Asosiasi Pengajar Hukum Adat (APHA), Universitas Pancasila, Universitas Trisakti, Universitas Nasional, dan Universitas Borobudur mengadakan International Conference bertema “Pengakuan dan Perlindungan Masyarakat Hukum Adat di Tingkat Nasional dan Internasional”. Konferensi akan digelar pada tanggal 7 sampai 8 Agustus 2023 berlokasi di Ruang Nusantara MPR RI.',
                'view'          =>  64,
                'status'        =>  '1',
                'is_featured'   =>  0,
                'publish_at'    =>  '2023-04-30T03:37:04.000Z',
                'eventdate_at'    =>  '2023-04-30T03:37:04.000Z',
                
            ],
        ];
        Event::insert($event);
    }
}
