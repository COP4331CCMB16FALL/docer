<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class SystemController extends Controller
{
    public function __construct()
    {
        // Apply the jwt.auth middleware to all methods in this controller
        $this->middleware('jwt.auth', []);
    }
    
    public function getIndex()
    {
        // GET request to index
        return response()->json(["OK"]);
    }
    
    public function getGetCpu()
    {
        $load = $this->get_server_cpu_usage();
        return response()->json(["load"=>$load]);
    }
    
    // duplicate ??
    public function getHdd()
    {
       return $this->getDiskUsage();
    }
    
    // duplicate ??
    public function getDataTransfer()
    {
       return $this->getNetworkRate();
    }
    
    public function getMemory()
    {
        $mem_stat = $this->get_server_memory_usage();
        return response()->json(["used" => $mem_stat[0],
                                 "total" => $mem_stat[1],
                                 "percent" => $mem_stat[2]]);
    }
    
    public function getNetworkRate()
    {
        $netstat = $this->get_network("eth0");
        return response()->json(["txbps" => $netstat[0], "rxbps" => $netstat[1]]);
    }
    
    public function getDiskUsage()
    {
        $free = disk_free_space("/");
        $total = disk_total_space("/");
        return response()->json(["free"=>$free, "total"=>$total]);
    }
    
    
    private function get_server_memory_usage(){
 
    	$free = shell_exec('free');
    	$free = (string)trim($free);
    	$free_arr = explode("\n", $free);
    	$mem = explode(" ", $free_arr[1]);
    	$mem = array_filter($mem);
    	$mem = array_merge($mem);
    	$memory_usage = $mem[2]/$mem[1]*100;
        //used, total, percent
    	return array($mem[2], $mem[1], $memory_usage);
    }
    
    private function get_server_cpu_usage(){
 
    	$load = sys_getloadavg();
    	return $load[0];
    }
    
    private function get_network($interface)
    {
        $rx[] = @file_get_contents("/sys/class/net/$interface/statistics/rx_bytes"); 
        $tx[] = @file_get_contents("/sys/class/net/$interface/statistics/tx_bytes"); 
        sleep(1); 
        $rx[] = @file_get_contents("/sys/class/net/$interface/statistics/rx_bytes"); 
        $tx[] = @file_get_contents("/sys/class/net/$interface/statistics/tx_bytes"); 
        
        $tbps = $tx[1] - $tx[0]; 
        $rbps = $rx[1] - $rx[0]; 
        
        return array($tbps, $rbps);
    }
}
