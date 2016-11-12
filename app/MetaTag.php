<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MetaTag extends Model
{
    protected $fillable = [
      'name'
    ];

    public $timestamps = false;

    public function documents()
    {
        return $this->belongsToMany(Document::class, 'documents_groups', 'document_id', 'group_id');
    }
}
