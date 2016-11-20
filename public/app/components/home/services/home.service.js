(function () {
    //Read up here http://stackoverflow.com/questions/21444100/angularjs-how-to-http-get-data-and-store-it-in-service
    'use strict';
    var app = angular.module('app.home');
    
    app.service('HomeInfo', HomeInfo);
    HomeInfo.$inject = ["$http", "$q"];
    function HomeInfo($http, $q){
        //First retrieve groups from the api
        var getData = function(){
            var defer = $q.defer();
            $http.get('/api/home')
                .success(function (data) {
                    var str = "Load: " + data.load;
                    defer.resolve(str);
                });
            return defer.promise;
        };
        return {
            getData: getData
        }
    }
        
    //You can pass group data through this between controllers
    app.service('HomeData', function() {
        var data = [];
        
        var addData = function(newObj) {
            data.push(newObj);
        };
        
        var getData = function(){
            return data;
        };
        
        return {
            addData: addData,
            getData: getData
        };

    });
})();
