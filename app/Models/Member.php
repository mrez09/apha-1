<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Commitee;
use Illuminate\Support\Facades\Storage;

class Member extends Model
{
    use HasFactory;
    protected $fillable = ['no_kta', 'nama', 'slug_kta', 'id_user', 'id_com', 'kode', 'jk', 'img', 'img_kta', 'universitas', 'fakultas', 'alamatf', 'mk', 'alamat', 'email', 'phone', 'scholar', 'scopus', 'sinta', 'status', 'dec', 'pen', 'is_featured', 'join_at', 'kta_token', 'start_date', 'expired_date', 'iuran_status', 'iuran_berlaku_hingga'];

    protected $appends = [
        'img_url',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user');
    }
    public function committe()
    {
        return $this->hasOne(Commitee::class, 'id', 'id_com');
    }
    public function invoices()
    {
        return $this->hasMany(Invoice::class);
    }

    public function logs()
    {
        return $this->morphMany(ActivityLog::class, 'loggable');
    }

    public function committee()
    {
        return $this->belongsTo(
            Commitee::class,
            'id_com',
            'id'
        );
    }

    public function getImgUrlAttribute()
    {
        if ($this->img && Storage::disk('public')->exists($this->img)) {
            return asset('storage/' . $this->img);
        }

        return asset('/storage/default/sample_profile.png');
    }

}


