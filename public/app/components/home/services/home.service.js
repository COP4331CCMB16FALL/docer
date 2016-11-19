(function () {
    //Read up here http://stackoverflow.com/questions/21444100/angularjs-how-to-http-get-data-and-store-it-in-service
    'use strict';
    var app = angular.module('app.home');
    app.service('HomeInfo', SystemInfo);
    SystemInfo.$inject = ["$http", "$q"];
    function HomeInfo($http, $q){
        return {
            getAllData:function(){
                var defer = $q.defer();
                $http.get('/api/home')
                    .success(function (data) {
                        var str = "Load: " + data.load;
                        defer.resolve(str);
                    });
                return defer.promise;
            }
        }
    }
})();
