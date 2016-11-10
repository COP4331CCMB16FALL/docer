(function () {
    'use strict';

    angular
        .module('app')
        .controller('LogoutController', LogoutController);

    LogoutController.$inject = ['$location', 'AuthenticationService'];
    function LogoutController($location, AuthenticationService) {
        AuthenticationService.Logout(
            function (response) 
            {
                console.log("logout result:", response);
            }
        );
        
        // reset login status
        AuthenticationService.ClearCredentials();
        
        //redirect back to login page
        $location.path( "/login" );
    }

})();