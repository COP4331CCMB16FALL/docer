(function() {
  'use strict';

  angular
    .module('app.group.create')
    .config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider.when('/group/create', {
      templateUrl: 'app/components/group/create/createView.html'
    });
  }

})();