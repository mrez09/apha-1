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
        Schema::table('members', function (Blueprint $table) {
            $table->renameColumn('boolean', 'is_active');
        });

        Schema::table('members', function (Blueprint $table) {
            $table->boolean('is_active')->default(false)->change();
        });
    }

    
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('members', function (Blueprint $table) {
            $table->renameColumn('is_active', 'boolean');
        });

        Schema::table('members', function (Blueprint $table) {
            $table->string('boolean')->default('0')->change();
        });
    }

};
