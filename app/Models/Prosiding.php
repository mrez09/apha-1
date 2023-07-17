<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Prosiding extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['name', 'slug', 'category', 'url', 'thumbnail', 'decription', 'rating', 'is_featured'];
}
