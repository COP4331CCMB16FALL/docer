(function() {
  'use strict';

  angular
      .module('app.menu')
      .config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider.when('/admin', {
      templateUrl: 'app/components/sys_info/menu/menuView.html'
    });
  }

})();
