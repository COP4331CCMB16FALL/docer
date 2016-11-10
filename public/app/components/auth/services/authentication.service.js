(function () {
    'use strict';

    angular
        .module('app')
        .factory('AuthenticationService', AuthenticationService);

    AuthenticationService.$inject = ['$http', '$cookieStore', '$rootScope', '$timeout', 'UserService'];
    function AuthenticationService($http, $cookieStore, $rootScope, $timeout, UserService) {
        var service = {};

        service.Login = Login;
        service.SetCredentials = SetCredentials;
        service.ClearCredentials = ClearCredentials;

        return service;
		
        function Login(username, password, callback) {

            /* Dummy authentication for testing, uses $timeout to simulate api call
             ----------------------------------------------
            $timeout(function () {
                var response;
                UserService.GetByUsername(username)
                    .then(function (user) {
                        if (user !== null && user.password === password) {
                            response = { success: true };
							$rootScope.loggedIn = true;
                        } else {
                            response = { success: false, message: 'Username or password is incorrect' };
							$rootScope.loggedIn = false;
                        }
                        callback(response);
                    });
            }, 1000);
            */
            
            /* Use this for real authentication
             ----------------------------------------------*/
            var http_ret = $http.post('/api/authenticate', { email: username, password: password });
            
            http_ret.success(function (response) {
                    callback(response);
            });
            http_ret.error(function (err) {
                    console.log(err);
                    callback(err);
            });
        }

        function SetCredentials(username, token) {
            $rootScope.globals = {
                currentUser: {
                    username: username,
                    token: token,
                }
            };

            $http.defaults.headers.common['Authorization'] = 'Bearer  ' + token; //Bearer token
            $cookieStore.put('globals', $rootScope.globals);
        }

        function ClearCredentials() {
            $rootScope.globals = {};
            $cookieStore.remove('globals');
            $http.defaults.headers.common.Authorization = 'Basic';
        }
    }

})();