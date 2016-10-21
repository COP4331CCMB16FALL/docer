(function() {
  'use strict';

  angular
    .module('app.logout')
    .config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider.when('/logout', {
      templateUrl: 'app/components/auth/logout/logoutView.html'
    });
  }
  
})();