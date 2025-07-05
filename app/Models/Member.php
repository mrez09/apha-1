<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Member extends Model
{
    use HasFactory;
    protected $fillable = ['no_kta', 'nama', 'slug_kta', 'id_user', 'id_com', 'kode', 'jk', 'img', 'img_kta', 'universitas', 'fakultas', 'alamatf', 'mk', 'alamat', 'email', 'phone', 'scholar', 'scopus', 'sinta', 'status', 'dec', 'pen', 'is_featured', 'join_at'];

    public function user()
{
    return $this->belongsTo(User::class, 'id_user');
}
}


