(function () {
    //Read up here http://stackoverflow.com/questions/21444100/angularjs-how-to-http-get-data-and-store-it-in-service

    'use strict';
    var app = angular.module('app.admin.user');

    app.service('AdminUserService', AdminUserService);

    AdminUserService.$inject = ["$http", "$q"];

    function AdminUserService($http, $q){
        return {
            readUser:function(uid){
                var defer = $q.defer();
                $http.get('/api/read-user', {params: { id: uid }})
                    .success(function (data) {
                        defer.resolve(data);
                    });
                return defer.promise;
            },
            createUser:function(user){
                var defer = $q.defer();
                $http.post('/api/create-user', user)
                    .success(function (data) {
                        defer.resolve(data.message);
                    })
                    .error(function (data) {
                        defer.resolve(data);
                    });
                return defer.promise;
            },
            destroyUser:function(uid){
                var defer = $q.defer();
                $http.post('/api/destroy-user', { id: uid })
                    .success(function (data) {
                        defer.resolve(data.message);
                    })
                    .error(function () {
                        defer.resolve("Error");
                    });
                return defer.promise;
            },
            updateUser:function(uid, uname, uemail){
                var defer = $q.defer();
                $http.post('/api/update-user', { id: uid, name: uname, email: uemail})
                    .success(function (data) {
                        defer.resolve(data.message);
                    })
                    .error(function () {
                        defer.resolve("Error");
                    });
                return defer.promise;
            },
        }
    }
})();
