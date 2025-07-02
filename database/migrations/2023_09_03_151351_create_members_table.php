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
        Schema::create('members', function (Blueprint $table) {
            $table->id();
            $table->string('no_kta', 255)->nullable();
            $table->string('nama', 255);
            $table->string('slug_kta')->nullable();
            $table->string('id_user')->nullable();
            $table->string('id_com')->nullable();
            $table->string('kode')->nullable();
            $table->string('jk')->nullable();
            $table->string('img')->nullable();
            $table->string('img_kta')->nullable();
            
            $table->text('universitas')->nullable();
            $table->text('fakultas')->nullable();
            $table->text('alamatf')->nullable();
            $table->string('mk')->nullable();
            $table->text('alamat')->nullable();
            $table->string('email')->unique();
            $table->string('phone')->nullable();
            $table->text('scholar')->nullable();
            $table->text('scopus')->nullable();
            $table->text('sinta')->nullable();
            $table->string('status')->default('0');
            $table->text('dec')->nullable();
            $table->text('pen')->nullable();
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
        Schema::dropIfExists('members');
    }
};
