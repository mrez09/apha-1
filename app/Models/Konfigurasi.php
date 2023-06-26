<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Konfigurasi extends Model
{
    use HasFactory;
    protected $fillable = ['namawebsite', 'title', 'description', 'apple_mobile', 'slug', 'tagline', 'address', 'fbid', 'img', 'metatag', 'pengurus', 'fav'];
}
