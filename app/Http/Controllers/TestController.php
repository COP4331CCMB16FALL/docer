<?php

namespace App\Http\Controllers;

use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Http\Request;
use App\Http\Requests;

class TestController extends Controller
{

    public function __construct()
    {
        // Apply the jwt.auth middleware to all methods in this controller
        //$this->middleware('jwt.auth', []);
    }
    
    public function index()
    {
        return response()->json([
            [
                'image' => 'http://imgs.xkcd.com/comics/estimation.png',
                'text' => 'Estimation',
                'id' => 0
            ],
            [
                'image' => 'http://imgs.xkcd.com/comics/sandwich.png',
                'text' => 'Sandwich',
                'id' => 1
            ],
            [
                'image' => 'http://imgs.xkcd.com/comics/labyrinth_puzzle.png',
                'text' => 'Labyrinth Puzzle',
                'id' => 2
            ],
            [
                'image' => 'http://imgs.xkcd.com/comics/pointers.png',
                'text' => 'Pointers',
                'id' => 3
            ]
        ]);
    }
}
