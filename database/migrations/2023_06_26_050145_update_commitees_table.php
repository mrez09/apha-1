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
        //
        Schema::table('commitees', function (Blueprint $table) {
            
            $table->dropColumn(['nip', 'nik', 'email', 'phone', 'pendidikan']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
        Schema::table('commitees', function (Blueprint $table) {
            $table->string('nip', 10)->nullable();
            $table->string('nik', 10)->nullable();
            $table->string('email')->nullable();
            $table->string('phone')->nullable();
            $table->string('pendidikan')->nullable();
        });
        
    }
};
