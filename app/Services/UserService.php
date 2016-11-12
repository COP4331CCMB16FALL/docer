<?php

namespace App\Services;

use App\User;

class UserService
{

    public function createUser($email, $password)
    {

    }

    public function updateUser($user_id)
    {

    }

    public function readUser($user_id)
    {
//        $user = DB::table('users')->where('id', '=', $user_id)->first()->groups;
        $user = User::find($user_id);

        // to get the user's groups, use $user->groups

        return $user;

    }

    public function destroyUser($user_id)
    {

    }

}
