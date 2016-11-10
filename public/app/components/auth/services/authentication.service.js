(function () {
    'use strict';

    angular
        .module('app')
        .factory('AuthenticationService', AuthenticationService);

    AuthenticationService.$inject = ['$http', '$cookieStore', '$rootScope', '$timeout', 'UserService'];
    function AuthenticationService($http, $cookieStore, $rootScope, $timeout, UserService) {
        var service = {};

        service.Login = Login;
        service.Logout = Logout;
        service.SetCredentials = SetCredentials;
        service.ClearCredentials = ClearCredentials;

        return service;
		
		//Laravel used email and password 
        function Login(email, password, callback) {

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
            $http.post('/api/authenticate', { email: email, password: password })
            .success(function (response) {
                    callback(response);
            })
            .error(function (err) {
                    console.log(err); //debug crap
                    callback(err);
            });
        }
        
        //logout function - tell laravel backend to invalidate token
        function Logout(callback) {
            $http.get('/api/deauthenticate')
            .success(function (response) {
                    callback(response);
            })
            .error(function (err) {
                    console.log(err); //debug crap
                    callback(err);
            });
        }

        function SetCredentials(email, token) {
            $rootScope.globals = {
                currentUser: {
                    email: email, //not sure if we need to keep track of the email? to show on nav bar later? meh
                    token: token,
                }
            };

            $http.defaults.headers.common['Authorization'] = 'Bearer ' + token; //Bearer token
            $cookieStore.put('globals', $rootScope.globals);
        }

        function ClearCredentials() {
            $rootScope.globals = {};
            $cookieStore.remove('globals');
            $http.defaults.headers.common.Authorization = '';
        }
    }

})();