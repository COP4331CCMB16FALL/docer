(function() {
  'use strict';

  angular
    .module('app')
    .config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider.when('/logout', {
      template: " ",
      controller: 'LogoutController',
    });
  }
  
})();