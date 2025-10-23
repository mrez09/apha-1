<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ActivityLog extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'performed_by',
        'loggable_type',
        'loggable_id',
        'action',
        'description',
        'old_status',
        'new_status',
        'ip_address',
        'created_at',
        'updated_at',
    ];
    
    //public function performedBy()
    //{
    //    return $this->belongsTo(User::class, 'performed_by');
    //}
    public function performedBy()
    {
        return $this->belongsTo(User::class,'performed_by');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function loggable()
    {
        return $this->morphTo();
    }

}
