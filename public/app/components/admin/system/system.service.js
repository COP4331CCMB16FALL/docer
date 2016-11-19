(function () {
    //Read up here http://stackoverflow.com/questions/21444100/angularjs-how-to-http-get-data-and-store-it-in-service

    'use strict';
    var app = angular.module('app.admin');

    app.service('SystemInfo', SystemInfo);

    SystemInfo.$inject = ["$http", "$q"];

    function SystemInfo($http, $q){
        function formatBytes(bytes,decimals) {
            if(bytes == 0) return '0 Byte';
            var k = 1000; // or 1024 for binary
            var dm = decimals + 1 || 3;
            var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            var i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
        }
        return {
            getCpu:function(){
                var defer = $q.defer();
                $http.get('/api/system/get-cpu')
                    .success(function (data) {
                        var str = "Load: " + data.load;
                        defer.resolve(str);
                    });
                return defer.promise;
            },
            getHdd: function(){
                var defer = $q.defer();
                $http.get('/api/system/hdd')
                    .success(function (data) {
                        var str = "Free: " + formatBytes(data.free, 1) 
                                + " Total: " + formatBytes(data.total, 1);
                        defer.resolve(str);
                    });
                return defer.promise;
            },
            getDataTransfer: function(){
                var defer = $q.defer();
                $http.get('/api/system/data-transfer')
                    .success(function (data) {
                        var str = "TxBps: " + data.txbps
                                + " RxBps: " + data.rxbps;
                        defer.resolve(str);
                    });
                return defer.promise;
            },
            getMemory: function(){
                var defer = $q.defer();
                $http.get('/api/system/memory')
                    .success(function (data) {
                        var str = "Used: " + formatBytes(data.used, 1) 
                                + " Total: " + formatBytes(data.total, 1)
                                + " " + parseFloat(data.percent).toFixed(2) + "%";
                        defer.resolve(str);
                    });
                return defer.promise;
            },
            getNetworkRate: function(){
                var defer = $q.defer();
                $http.get('/api/system/network-rate')
                    .success(function (data) {
                        var str = "TxBps: " + data.txbps
                                + " RxBps: " + data.rxbps;
                        defer.resolve(str);
                    });
                return defer.promise;
            },
            getDiskUsage: function(){
                var defer = $q.defer();
                $http.get('/api/system/disk-usage')
                    .success(function (data) {
                        var str = "Free: " + formatBytes(data.free, 1) 
                                + " Total: " + formatBytes(data.total, 1);
                        defer.resolve(str);
                    });
                return defer.promise;
            }

        }
    }
})();
