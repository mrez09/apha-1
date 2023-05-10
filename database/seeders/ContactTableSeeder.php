<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Contact;

class ContactTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $contact = [
            [
                'firstname'          =>  'Muhammad',
                'lastname'          =>  'Rizki Eka', 
                'email'      =>  'mrizkiekasaputra@gmail.com',
                'phone'           =>  '+62 882-1009-2657',
                'message'     =>  'Sat set sat set tes',
                
            ],
            [
                'firstname'          =>  'Muhammad Rizki',
                'lastname'          =>  'Eka Saputra', 
                'email'      =>  'mrizkiekasaputra@gmail.com',
                'phone'           =>  '+62 882-1009-2657',
                'message'     =>  'Sat set sat set tes',
                
            ]
            
                
        ];
        Contact::insert($contact);
    }
}
