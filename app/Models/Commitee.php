<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;

class Commitee extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['nama', 'slug', 'nip', 'nik', 'img', 'divisi', 'subdivisi', 'jabatan', 'email', 'phone', 'description', 'pendidikan', 'periode', 'is_featured', 'join_at'];
    protected $appends = [
        'img_url',
    ];

    public function jabatanRelasi()
    {
        return $this->belongsTo(Jabatan::class, 'jabatan', 'id');
    }
    
    public function divisiRelasi()
    {
        return $this->belongsTo(Divisi::class, 'divisi', 'id');
    }
    
    public function subdivisiRelasi()
    {
        return $this->belongsTo(Subdivisi::class, 'subdivisi', 'id');
    }
    
    public function memberRelasi()
    {
        return $this->hasMany(Member::class, 'id_com');
    }

    public function committee()
    {
        return $this->belongsTo(
            Committee::class,
            'id_com'
        );
    }

    public function getImgUrlAttribute()
    {
        if ($this->img && Storage::disk('public')->exists($this->img)) {
            return asset('storage/' . $this->img);
        }

        if ($this->gender == 2) {
            return asset('storage/default/female.png');
        }

        return asset('storage/default/male.png');
    }

    public function jabatan()
    {
        return $this->belongsTo(Jabatan::class, 'jabatan', 'id');
    }
    
    public function divisi()
    {
        return $this->belongsTo(Divisi::class, 'divisi', 'id');
    }
    
    public function subdivisi()
    {
        return $this->belongsTo(Subdivisi::class, 'subdivisi', 'id');
    }

    

    
}


