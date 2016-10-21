(function() {
  'use strict';

  angular
    .module('app.group.create')
    .config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider.when('/group/create', {
      templateUrl: 'app/components/sys_info/manage_docs/createView.html'
    });
  }

})();
