<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('konfigurasis', function (Blueprint $table) {
            $table->id();
            $table->string('namawebsite', 255);
            $table->string('description');
            $table->string('title', 255);
            $table->string('apple_mobile');
            $table->string('slug', 10);
            $table->string('tagline');
            $table->string('address');
            $table->string('fbid');
            $table->string('img');
            $table->text('metatag');
            $table->string('pengurus');
            $table->string('fav');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('konfigurasis');
    }
};
