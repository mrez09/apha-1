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
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); 
            $table->string('invoice_number')->unique(); // nomor unik
            $table->decimal('amount', 12, 2); // nominal
            $table->string('method')->default('manual'); // manual / bank / qris
            $table->string('gateway')->nullable(); // midtrans / duitku / manual
            $table->string('status')->default('pending'); // pending / paid / failed / verified
            $table->string('payment_type')->nullable(); // seminar / tahunan / lainnya
            $table->string('description')->nullable();  // keterangan tambahan
            $table->string('proof')->nullable(); // upload bukti transfer (path file)
            $table->timestamp('paid_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invoices');
    }
};
