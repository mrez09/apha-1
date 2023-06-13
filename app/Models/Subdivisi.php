<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Subdivisi extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['namasubdivisi', 'id_divisi', 'status'];
}
