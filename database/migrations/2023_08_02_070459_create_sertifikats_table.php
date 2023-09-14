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
        Schema::create('sertifikats', function (Blueprint $table) {
            $table->id();
            $table->string('no', 255)->nullable();
            $table->string('slug', 255)->nullable();
            $table->string('nama', 255)->nullable();
            $table->string('judul', 255)->nullable();
            $table->string('status', 255)->nullable();
            $table->string('id_user')->nullable();
            $table->string('category', 10)->nullable();
            $table->string('img')->nullable();
            $table->string('link')->nullable();
            $table->text('konten')->nullable();
            $table->bigInteger('view')->nullable();            
            $table->string('publish_at',255)->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sertifikats');
    }
};
