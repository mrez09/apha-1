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
        Schema::create('staticpages', function (Blueprint $table) {
            $table->id();
            $table->string('judul', 255);
            $table->string('slug', 255);
            $table->string('guid', 255);
            $table->string('id_user');
            //$table->string('category', 10);
            $table->string('status');
            $table->string('img');
            $table->string('file');
            $table->text('description');
            $table->bigInteger('view');
            $table->bigInteger('menu_order')->default(0);
            $table->string('post_type', 20)->default('page');
            $table->string('publish_at',255);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('staticpages');
    }
};
