(function() {
  'use strict';

  angular
    .module('app')
    .config(configFunction);

  configFunction.$inject = ['$routeProvider', '$locationProvider'];

  function configFunction($routeProvider, $locationProvider) {
    $routeProvider.when('/register', {
              	controller: 'RegisterController',
                templateUrl: 'app/components/auth/register/registerView.html',
                controllerAs: 'vm'
            });
  }

})();