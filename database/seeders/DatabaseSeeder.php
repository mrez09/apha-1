<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call(RoleTableSeeder::class);
        $this->call(UserTableSeeder::class);
        $this->call(BukuTableSeeder::class);
        $this->call(GaleriTableSeeder::class);
        $this->call(NewsTableSeeder::class);
        $this->call(ContactTableSeeder::class);
        $this->call(ProsidingTableSeeder::class);
        $this->call(BannerTableSeeder::class);
        $this->call(VideoTableSeeder::class);
        $this->call(PengurusTableSeeder::class);
        $this->call(DivisiTableSeeder::class);
        $this->call(SubdivisiTableSeeder::class);
        $this->call(JabatanTableSeeder::class);
    }
}
