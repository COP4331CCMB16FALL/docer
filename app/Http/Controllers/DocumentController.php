<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Services\DocumentService;
use Illuminate\Http\Request;

class DocumentController extends Controller
{

    protected $service;

    public function __construct()
    {
        $this->service = app(DocumentService::class);
    }

     public function index()
    {
        return '';
    }

    public function createDocument(Request $request)
    {

    }

    public function readDocument(Request $request = null)
    {
        // TODO: Change this to use $request instead of being hardcoded
        $document = $this->service->readDocument(1);

        dump($document);

        return $document;
    }

    public function updateDocument(Request $request)
    {

    }

    public function destroyDocument(Request $request)
    {

    }

}
