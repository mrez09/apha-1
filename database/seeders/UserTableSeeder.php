<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $admin = User::create(
        [
            'name'      =>  'Muhammad Rizki Eka Saputra',
            'email'     =>  'mrizkiekasaputra@gmail.com',
            'password'  =>  bcrypt('Nemera07'),
        ]);
        $admin->assignRole('admin');
    }
}
