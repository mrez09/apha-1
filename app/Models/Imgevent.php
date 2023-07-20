<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Imgevent extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['id_event', 'judul', 'slug', 'id_user', 'img', 'link', 'view', 'status', 'is_featured', 'eventdate_at', 'enddate_at'];
}
