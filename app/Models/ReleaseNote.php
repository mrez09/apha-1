<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ReleaseNote extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
    'version',
    'title',
    'description',
    'status',
    'created_by',
];
}
