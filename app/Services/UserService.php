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
//        Example of the same effect but using a where condition instead of the find function (find only works for id's)
//        $user = DB::table('users')->where('id', '=', $user_id)->first();

        $user = User::find($user_id);

        // This gets the groups relationship and puts it in the user model.
        if(!is_null($user))
        {
            $user->relations = $user->groups;
        }

        // to get the user's groups, use $user->groups

        return $user;

    }

    public function destroyUser($user_id)
    {

    }

    public function getUserDocuments($user_id)
    {

    }
}
