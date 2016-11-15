<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Services\UserService;
use Illuminate\Http\Request;

class UserController extends Controller
{

    protected $service;

    public function __construct()
    {
        $this->service = app(UserService::class);
    }

     public function index()
    {
        return '';
    }

    public function createUser(Request $request)
    {

    }

    public function readUser(Request $request = null)
    {
        // TODO: Change this to use $request instead of being hardcoded
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
