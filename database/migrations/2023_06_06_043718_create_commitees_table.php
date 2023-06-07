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
        Schema::create('commitees', function (Blueprint $table) {
            $table->id();
            $table->string('nama', 255);
            $table->string('nip')->nullable();
            $table->string('nik')->nullable();
            $table->string('img');
            $table->bigInteger('divisi');
            $table->bigInteger('subdivisi');
            $table->bigInteger('jabatan');
            $table->string('email')->unique();
            $table->string('phone')->unique();
            $table->text('description')->nullable();
            $table->text('pendidikan')->nullable();
            $table->bigInteger('periode');
            $table->boolean('is_featured')->default(false);
            $table->string('join_at',255)->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('commitees');
    }
};
