(function() {
  'use strict';

  angular
    .module('app.admin.system')
    .config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider.when('/admin/system', {
        controller: 'SystemController',
        controllerAs: 'sysCtrl',
        templateUrl: 'app/components/admin/system/systemView.html'
    });
  }

})();
