<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Staticpage extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['judul', 'slug', 'guid', 'id_user', 'category', 'status', 'img', 'konten', 'view', 'menu_order', 'post_type', 'publish_at'];
}
