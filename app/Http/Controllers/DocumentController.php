<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Services\DocumentService;
use JWTAuth;
#use Tymon\JWTAuth\Exceptions\JWTException;
#use App\User;
use Validator;
#use Illuminate\Support\Facades\Storage;

class DocumentController extends Controller
{

    public function __construct()
    {
        // Apply the jwt.auth middleware to all methods in this controller
        // except for the authenticate/register method. We don't want to prevent
        // the user from retrieving their token if they don't already have it
        #$this->middleware('jwt.auth', ['except' => ['authenticate', 'register']]);
        $this->middleware('jwt.auth');
    }

    /**
     * Return the user
     *
     * @return Response
     */
    public function index()
    {
        // Just for testing. Remove later
        // Retrieve all the users in the database and return them        
        #$users = User::all();

        return 'index';
    }

    public function upload(Request $request)
    {
        $fileupload = $request->only('user_upload', 'group', 'filename');
        $validator = Validator::make($fileupload, [
            'user_upload' => 'required',
            'group' => 'required|integer'
        ]);
        if($validator->fails()) {
            return response()->json($validator->messages(), 422);
        }
        return app(DocumentService::class)->createDocument(
            $fileupload['user_upload'],
            $fileupload['group'],
            $request->user());
    }

    public function delete(Request $request, $id)
    {
        return app(DocumentService::class)->destroyDocument(
            $id,
            $request->user());
    }

    public function view(Request $request, $id)
    {
        return app(DocumentService::class)->readDocument(
            $id,
            $request->user());
    }

    public function search(Request $request)
    {
        return app(DocumentService::class)->searchDocument(
            $request->input('str'), 
            $request->user());
    }
}
