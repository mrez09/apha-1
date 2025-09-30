<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Payment extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = [
        'invoice_id', 
        'order_id',
        'transaction_id',
        'gateway',
        'payment_type',
        'gross_amount',
        'transaction_status',
        'transaction_time',
        'fraud_status',
        'payment_token',
        'receipt_url',
        'created_at',
        'updated_at', 
        'deleted_at', 
    ];

    public function invoice()
    {
        return $this->belongsTo(Invoice::class);
    }
}
