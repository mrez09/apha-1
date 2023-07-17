<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Event extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['judul', 'subjudul', 'slug', 'id_user', 'tag', 'img', 'description', 'view', 'status', 'is_featured', 'eventdate_at', 'enddate_at'];
}
