(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService'];
    function LoginController($location, AuthenticationService, FlashService) {
        var vm = this;

        vm.login = login;

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();
		
		login.$inject = ["$rootScope"];
        function login($rootScope) {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    $location.path('/');
					$rootScope.loggedIn = true;
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
					$rootScope.loggedIn = false;
                }
            });
        };
    }

})();