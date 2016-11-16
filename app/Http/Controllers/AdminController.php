<?php

namespace App\Http\Controllers;

use App\Services\SystemInfoService;
use Illuminate\Http\Request;

use App\Http\Requests;

class AdminController extends Controller
{
    protected $service;

    public function __construct()
    {
        $this->service = app(SystemInfoService::class);
    }

    public function getSystemInfo()
    {
        return $this->service->getSystemInfo();
    }

    public function getAdminPageInfo()
    {
        return $this->service->getAdminPageInfo();
    }
}
