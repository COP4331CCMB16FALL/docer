<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\User;
use Validator;

class AuthenticateController extends Controller
{

    public function __construct()
    {
        // Apply the jwt.auth middleware to all methods in this controller
        // except for the authenticate/register method. We don't want to prevent
        // the user from retrieving their token if they don't already have it
        $this->middleware('jwt.auth', ['except' => ['authenticate', 'register']]);
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
        $users = User::all();

        return $users;
    }

    /**
     * Return a JWT
     *
     * @return Response
     */
    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');

        try {
            // verify the credentials and create a token for the user
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            // something went wrong
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        // if no errors are encountered we can return a JWT
        return response()->json(compact('token'));
    }
    
    public function register(Request $request)
    {
        $userinfo = $request->only('name', 'email', 'password');
        
        $validator = Validator::make($userinfo, [
            'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|min:6',
        ]);
        
        //validate input
        if ($validator->fails()) {
            return response()->json($validator->messages(), 500);
        }
        
        //create user
        User::create([
            'name' => $userinfo['name'],
            'email' => $userinfo['email'],
            'password' => bcrypt($userinfo['password']),
        ]);
        
        //return user token
        return $this->authenticate($request);
    }
}