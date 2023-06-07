<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Commitee extends Model
{
    use HasFactory;
    protected $fillable = ['nama', 'nip', 'nik', 'img', 'divisi', 'subdivisi', 'jabatan', 'email', 'phone', 'description', 'pendidikan', 'periode', 'is_featured', 'join_at'];
}
