<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Invoice extends Model
{
    protected $fillable = [
        'id', 
        'member_id',
        'product_id',
        'order_id',
        'user_id', 
        'invoice_number', 
        'total_amount',
        'description',
        'method', 
        'type',
        'gateway', 
        'status', 
        'payment_type',
        'payment_token',
        'proof', 
        'paid_at',
        'due_date',  
    ];

    public function items() {
        return $this->hasMany(InvoiceItem::class);
    }

    public function product()
{
    return $this->belongsTo(Product::class);
}

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function payment() {
        return $this->hasOne(Payment::class);
    }

    
}
