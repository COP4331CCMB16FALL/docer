(function() {
  'use strict';
  var app = angular.module('app.admin.doc');
  app.config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider.when('/admin/doc', {
        controller: 'CategoryController',
        controllerAs: 'catCtrl',
        templateUrl: 'app/components/admin/doc/docMainView.html'
    });
  }

})();
