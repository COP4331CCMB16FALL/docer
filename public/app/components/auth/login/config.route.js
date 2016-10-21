(function() {
  'use strict';

  angular
    .module('app')
    .config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider.when('/login', {
		controller: 'LoginController',
		templateUrl: 'app/components/auth/login/loginView.html',
		controllerAs: 'vm'
  	})
  }
})();