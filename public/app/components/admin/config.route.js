(function() {
  'use strict';

  angular
    .module('app.admin')
    .config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider.when('/admin/users', {
      templateUrl: 'app/components/admin/adminMainUserPanel.html'
    });
  }

})();
