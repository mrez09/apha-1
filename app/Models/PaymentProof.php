<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PaymentProof extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['id_user', 'no_invoice', 'judul', 'subjudul', 'slug_judul', 'img', 'status', 'konten', 'message', 'is_featured', 'tanggal_bayar'];
}
