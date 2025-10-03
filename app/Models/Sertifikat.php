<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class sertifikat extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['no', 'judul', 'slug', 'serti_token', 'nama', 'status', 'id_user', 'category', 'img', 'link', 'konten', 'view', 'publish_at', 'expired_date'];

    public function user()
{
    return $this->belongsTo(User::class, 'id_user');
}

}


