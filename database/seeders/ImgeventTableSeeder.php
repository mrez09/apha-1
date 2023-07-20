<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Imgevent;

class ImgeventTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $imgevent = [
            [
                'id_event'      =>  '1',
                'judul'         =>  'APHA International Conference & Call for Papers',
                'slug'          =>  'apha-international-conference-call-for-papers', 
                'id_user'       =>  '1',
                'img'           =>  'https://i.imgur.com/y4g72j2.jpg',
                'link'          =>  'https://docs.google.com/forms/d/e/1FAIpQLSdReQK2a7y-7vvIzoOPOgsebwlDlMUXkhfk0vuWPWm_XnZd4Q/viewform',
                'view'          =>  64,
                'status'        =>  'Publish',
            ],
            [
                'id_event'      =>  '1',
                'judul'         =>  'APHA International Conference & Call for Papers',
                'slug'          =>  'apha-international-conference-call-for-papers-2', 
                'id_user'       =>  '1',
                'img'           =>  'https://i.imgur.com/SM5Equu.jpg',
                'link'          =>  'https://docs.google.com/forms/d/e/1FAIpQLSdReQK2a7y-7vvIzoOPOgsebwlDlMUXkhfk0vuWPWm_XnZd4Q/viewform',
                'view'          =>  64,
                'status'        =>  'Publish',
            ],
        ];
        Imgevent::insert($imgevent);
    }
}
