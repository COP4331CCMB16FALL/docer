(function() {
  'use strict';

  angular
    .module('app.groups')
    .config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider.when('/groups', {
      templateUrl: 'app/components/group/manageGroups.html'
    });
  }

})();
