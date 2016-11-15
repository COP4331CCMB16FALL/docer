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

    public function index()
    {
        return '';
    }

    public function createGroup(Request $request)
    {

    }

    public function readGroup(Request $request)
    {

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
        $groupDocuments = app(GroupService::class)->getGroupDocuments(1);

        dump($groupDocuments);

        return $groupDocuments;
    }

    public function updateGroup(Request $request)
    {

    }

    public function destroyGroup(Request $request)
    {

    }

}
