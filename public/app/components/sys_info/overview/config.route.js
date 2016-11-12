(function() {
  'use strict';

  angular
    .module('app.overview')
    .config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider.when('/admin/overview', {
      templateUrl: 'app/components/sys_info/overview/overviewView.html'
    });
  }

})();
