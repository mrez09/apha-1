<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Permission\Models\Role;

class Guides extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'slug',
        'description',
        'youtube_url',
        'thumbnail',
        'visibility',
        'category',
        'sort_order',
        'status',
        'created_at',
        'updated_at',
        'status',
    ];
    

    public function guides()
    {
        return $this->belongsToMany(Guide::class);
    }
    public function roles()
    {
        return $this->belongsToMany(
            Role::class,
            'guide_role',
            'guide_id',
            'role_id'
        );
    }

}


