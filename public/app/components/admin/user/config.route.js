(function() {
  'use strict';
  var app = angular.module('app.admin.user');

  app.config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
      $routeProvider.when('/admin/user', {
          controller: 'CategoryController',
          controllerAs: "catCtrl",
          templateUrl: 'app/components/admin/user/userMain.html'
      });
  }

})();
