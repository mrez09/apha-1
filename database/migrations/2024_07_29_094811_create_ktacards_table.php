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
        Schema::create('ktacards', function (Blueprint $table) {
            $table->id();$table->id();
            $table->string('id_user', 255)->nullable();
            $table->string('no_kta', 255)->nullable();
            $table->string('slug_kta', 255)->nullable();
            $table->string('periode', 255)->nullable();
            $table->string('file', 255)->nullable();
            $table->string('link')->nullable();
            $table->boolean('is_featured')->default(false);
            $table->string('tanggal_bayar',255)->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ktacards');
    }
};
