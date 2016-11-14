(function() {
  'use strict';

  angular
    .module('app.search')
    .config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider.when('/search', {
      templateUrl: 'app/components/search/searchView.html'
    });
  }

})();