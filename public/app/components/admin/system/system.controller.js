(function(){
    //Read up here http://stackoverflow.com/questions/21444100/angularjs-how-to-http-get-data-and-store-it-in-service

    'use strict';
    var app = angular.module('app.admin');

    app.controller('SystemController', SystemController);

    SystemController.$inject = ['$scope, SystemInfo'];
    function SystemController($scope){
        /* Use this when the api works
        SystemService.getCpu().then(function(data){
            $scope.cpu = data;
        });
        SystemService.getHdd().then(function(data){
            $scope.hdd = data;
        });
        SystemService.getDataTransfer().then(function(data){
            $scope.dataTransfer = data;
        });
        SystemService.getMemory().then(function(data){
            $scope.memory = data;
        });
        SystemService.getNetworkRate().then(function(data){
            $scope.networkRate = data;
        });
        SystemService.getDiskUsage().then(function(data){
            $scope.diskUsage = data;
        });
        */

        /*Use thesse to test the views */
        $scope.cpu              = "Over 9000"
        $scope.hdd              = "Over 9000"
        $scope.dataTransfer     = "Over 9000"
        $scope.memory           = "Over 9000"
        $scope.networkRate      = "Over 9000"
        $scope.diskUsage        = "Over 9000"
    }





})();
