<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    protected $fillable = [
        'path',
        'user_id',
        'group_id',
        'mime_type',
    ];

    public $timestamps = true;

    public function groups()
    {
        return $this->belongsToMany('\App\Group', 'users_groups', 'user_id', 'group_id');
    }

    public function metaTags()
    {
        return $this->belongsToMany('\App\MetaTag', 'documents_groups', 'document_id', 'group_id');
    }
}