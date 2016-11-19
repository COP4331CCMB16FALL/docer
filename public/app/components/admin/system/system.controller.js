(function(){
    //Read up here http://stackoverflow.com/questions/21444100/angularjs-how-to-http-get-data-and-store-it-in-service

    'use strict';
    var app = angular.module('app.admin.system');

    app.controller('SystemController', SystemController);

    SystemController.$inject = ['$scope', 'SystemInfo'];
    function SystemController($scope, SystemInfo){
        SystemInfo.getCpu().then(function(data){
            $scope.cpu = data;
        });
        SystemInfo.getHdd().then(function(data){
            $scope.hdd = data;
        });
        SystemInfo.getDataTransfer().then(function(data){
            $scope.dataTransfer = data;
        });
        SystemInfo.getMemory().then(function(data){
            $scope.memory = data;
        });
        SystemInfo.getNetworkRate().then(function(data){
            $scope.networkRate = data;
        });
        SystemInfo.getDiskUsage().then(function(data){
            $scope.diskUsage = data;
        });

        /*Use thesse to test the views */
        /*
        $scope.cpu              = "Over 9000"
        $scope.hdd              = "Over 9000"
        $scope.dataTransfer     = "Over 9000"
        $scope.memory           = "Over 9000"
        $scope.networkRate      = "Over 9000"
        $scope.diskUsage        = "Over 9000"
        */
    }





})();
