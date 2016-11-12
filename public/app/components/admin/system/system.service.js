(function () {
    //Read up here http://stackoverflow.com/questions/21444100/angularjs-how-to-http-get-data-and-store-it-in-service

    'use strict';
    var app = angular.module('app.admin');

    app.service('SystemInfo', SystemInfo);

    SystemInfo.$inject = ['$http', '$q'];

    function SystemInfo($http, $q){
        return {
            getCpu:function($http, $q){
                var defer = $q.defer();
                $http.get('/api/system/get-cpu')
                    .success(function (data) {
                        defer.resolve(data);
                    });
                return defer.promise;
            },
            getHdd: function($http, $q){
                var defer = $q.defer();
                $http.get('/api/system/hdd')
                    .success(function (data) {
                        defer.resolve(data);
                    });
                return defer.promise;
            },
            getDataTransfer: function($http, $q){
                var defer = $q.defer();
                $http.get('/api/system/data-transfer')
                    .success(function (data) {
                        defer.resolve(data);
                    });
                return defer.promise;
            },
            getMemory: function($http, $q){
                var defer = $q.defer();
                $http.get('/api/system/memory')
                    .success(function (data) {
                        defer.resolve(data);
                    });
                return defer.promise;
            },
            getNetworkRate: function($http, $q){
                var defer = $q.defer();
                $http.get('/api/system/network-rate')
                    .success(function (data) {
                        defer.resolve(data);
                    });
                return defer.promise;
            },
            getDiskUsage: function($http, $q){
                var defer = $q.defer();
                $http.get('/api/system/disk-usage')
                    .success(function (data) {
                        defer.resolve(data);
                    });
                return defer.promise;
            }

        }
    }
})();
