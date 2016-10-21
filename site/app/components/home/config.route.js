(function() {
  'use strict';

  angular
    .module('app.home')
    .config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'app/components/home/homeView.html'
    });
  }

})();