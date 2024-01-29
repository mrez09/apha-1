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
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->string('id_user', 255)->nullable();
            $table->string('no_invoice', 255)->nullable();
            $table->string('judul', 255)->nullable();
            $table->string('subjudul', 255)->nullable();
            $table->string('jumlah', 255)->nullable();
            $table->string('slug_judul')->nullable();
            $table->string('img')->nullable();
            $table->string('status')->nullable();
            $table->text('konten')->nullable();
            $table->text('message')->nullable();
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
        Schema::dropIfExists('payments');
    }
};
