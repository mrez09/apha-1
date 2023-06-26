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
        Schema::table('news', function (Blueprint $table) {
            $table->string('ticker', 10)->default('0')->after('is_featured');
            $table->string('status', 10)->default('Publish')->after('slug');
        });
        
        //$table->dropColumn('ticker');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
        Schema::table('news', function (Blueprint $table) {
            $table->dropColumn('ticker');
            $table->dropColumn('status');
        });
        
    }
};
