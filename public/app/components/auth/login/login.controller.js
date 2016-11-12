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

        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.token) {
                    AuthenticationService.SetCredentials(vm.username, response.token);
                    $location.path('/');
                } else {
                    //TODO: better error message
                    FlashService.Error(response);
                    vm.dataLoading = false;
                }
            });
        };
    }

})();
