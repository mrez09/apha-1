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
        Schema::table('bukus', function (Blueprint $table) {
            $table->string('harga', 255)->after('slug');
            $table->string('status', 10)->default('1')->after('rating');
            $table->text('sinopsis')->after('decription');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
        Schema::table('bukus', function (Blueprint $table) {
            $table->dropColumn('harga');
            $table->dropColumn('status');
            $table->dropColumn('sinopsis');
        });
    }
};
