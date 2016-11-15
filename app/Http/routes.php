<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return response()->json(['welcome']);
});

/* maximus crap 
Route::get('names', function()
{
    return array(
      1 => "John",
      2 => "Mary",
      3 => "Steven"
    );
});

Route::get('names/{id}', function($id)
{
    $names = array(
      1 => "John",
      2 => "Mary",
      3 => "Steven"
    );    
    return array($id => $names[$id]);
});
*/

Route::group(['prefix' => 'api'], function()
{
    Route::resource('authenticate', 'AuthenticateController', ['only' => ['index']]);
    Route::post('authenticate', 'AuthenticateController@authenticate');
    
    // Handles registering
    Route::post('register', 'AuthenticateController@register');
    
    // Handle logout
    Route::get('deauthenticate', 'AuthenticateController@deauthenticate');
    
    Route::resource('test', 'TestController', ['only' => ['index']]);
    
    Route::controller('system', 'SystemController');

    Route::post('document', 'DocumentController@upload');
    Route::get('document/{id}', 'DocumentController@view');
    Route::delete('document/{id}', 'DocumentController@delete');
});

Route::auth();

Route::get('/home', 'HomeController@index');


Route::post('/create-user', 'UserController@readUser');
Route::get('/read-user', 'UserController@readUser');
Route::post('/update-user', 'UserController@readUser');
Route::post('/destroy-user', 'UserController@readUser');

