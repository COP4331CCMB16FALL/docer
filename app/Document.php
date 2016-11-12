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

    public function group()
    {
        return $this->belongsToMany(Group::class);
    }

    public function metaTags()
    {
        return $this->belongsToMany(MetaTag::class, 'documents_groups', 'document_id', 'group_id');
    }
}