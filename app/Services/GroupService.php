<?php

namespace App\Services;

use App\Document;
use App\Group;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class GroupService
{

    public function createGroup($name)
    {
        $group = new Group([
            'name' => $name,
            'user_id' => Auth::id()
        ]);

        $group->save();
    }

    public function readGroup($group_id)
    {
        // TODO
    }

    public function updateGroup($group_id)
    {
        // TODO
    }

    public function getGroupMembers($group_id)
    {
        $users = [];

        $usersGroups = DB::table('users_groups')->where('group_id', '=', $group_id)->get();

        foreach($usersGroups as $user)
        {
            $users [] = User::find($user->user_id);
        }


        return $users;
    }

    public function getGroupDocuments($group_id)
    {
        $documents = [];

        $documentsGroup = DB::table('documents_groups')->where('group_id', '=', $group_id)->get();

        foreach($documentsGroup as $document)
        {
            $documents [] = Document::find($document->document_id);
        }

        return $documents;
    }

    public function destroyGroup($group_id, $user_id)
    {
        // TODO
    }

}
