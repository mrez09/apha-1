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
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('judul', 255);
            $table->string('subjudul', 255);
            $table->string('slug', 255);
            $table->string('id_user');
            $table->string('tag');
            $table->string('img');
            $table->text('description');
            $table->bigInteger('view');
            $table->string('status', 10)->default('Publish');
            $table->boolean('is_featured')->default(false);
            $table->string('eventdate_at',255);
            $table->string('enddate_at',255);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
