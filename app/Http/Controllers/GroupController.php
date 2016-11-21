<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Services\GroupService;
use Illuminate\Http\Request;

class GroupController extends Controller
{
    protected $service;

    public function __construct()
    {
        $this->service = app(GroupService::class);
    }

    public function createGroup(Request $request)
    {
        $this->service->createGroup($request->input('name'));
    }

    public function readGroup(Request $request)
    {
        $this->service->createGroup($request->input('group_id'));
    }

    public function getGroupMembers(Request $request = null)
    {
        // TODO: Change this to use $request instead of being hardcoded
        $groupMember = app(GroupService::class)->getGroupMembers(1);

        dump($groupMember);

        return $groupMember;
    }

    public function getGroupDocuments(Request $request = null)
    {
        // TODO: Change this to use $request instead of being hardcoded
        $groupDocuments = $this->service->getGroupDocuments(1);

        dump($groupDocuments);

        return $groupDocuments;
    }

    public function updateGroup(Request $request)
    {
        $this->service->updateGroup($request->input('group_id'));
    }

    public function destroyGroup(Request $request)
    {
        $this->service->destroyGroup($request->input('group_id'));
    }

}
