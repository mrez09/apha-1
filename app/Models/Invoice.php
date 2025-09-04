<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Invoice extends Model
{
    protected $fillable = [
        'id', 'user_id', 'invoice_number', 'amount',
        'method', 'gateway', 'status', 'proof', 'paid_at'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
