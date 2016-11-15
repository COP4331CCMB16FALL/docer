<?php

namespace App\Services;

use App\Document;

class DocumentService
{

    public function createDocument()
    {

    }

    public function updateDocument($document_id)
    {

    }

    public function readDocument($document_id)
    {
        $document = Document::find($document_id);

        // This gets the groups relationship and puts it in the user model.
        if(!is_null($document))
        {
            $document->relations = $document->groups;
            $document->relations = $document->metaTags;
        }

        // to get the user's groups, use $user->groups

        return $document;
    }

    public function destroyDocument($document_id)
    {

    }

}
