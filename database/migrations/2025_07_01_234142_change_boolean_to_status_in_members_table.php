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
        // Pastikan kolom 'boolean' ada dulu sebelum rename
        if (Schema::hasColumn('members', 'boolean')) {
            $table->renameColumn('boolean', 'is_active');
        }
    });

    Schema::table('members', function (Blueprint $table) {
        if (Schema::hasColumn('members', 'is_active')) {
            $table->boolean('is_active')->default(false)->change();
        }
    });
}

public function down(): void
{
    Schema::table('members', function (Blueprint $table) {
        if (Schema::hasColumn('members', 'is_active')) {
            $table->renameColumn('is_active', 'boolean');
        }
    });

    Schema::table('members', function (Blueprint $table) {
        if (Schema::hasColumn('members', 'boolean')) {
            $table->string('boolean')->default('0')->change();
        }
    });
}


};
