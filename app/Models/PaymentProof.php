<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PaymentProof extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['id_user', 'no_invoice', 'invoice_id', 'judul','jumlah', 'proof_file', 'status', 'konten', 'message', 'is_featured', 'tanggal_bayar'];

    public function invoice()
    {
        return $this->belongsTo(Invoice::class, 'invoice_id', 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user');
    }
    
    public function items() {
        return $this->hasMany(InvoiceItem::class);
    }

}
