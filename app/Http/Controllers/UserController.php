<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Services\UserService;
use Illuminate\Http\Request;

class UserController extends Controller
{

    protected $with = [
        '\App\groups'
    ];

     public function index()
    {
        return '';
    }

    public function createUser(Request $request)
    {

    }

    public function readUser(Request $request = null)
    {
//        $user = app(UserService::class)->readUser($request->input('user_id'));

        $user = app(UserService::class)->readUser(1);

        dump($user);

        return $user;
    }

    public function updateUser(Request $request)
    {

    }

    public function destroyUser(Request $request)
    {

    }

}
