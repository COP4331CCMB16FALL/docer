(function() {
  'use strict';

  angular
    .module('app.admin')
    .config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider.when('/admin', {
      templateUrl: 'app/components/admin/adminPanel.html'
    });
  }

})();
