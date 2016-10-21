(function() {
  'use strict';

  angular
    .module('app.manage.docs')
    .config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider.when('/admin/docs', {
      templateUrl: 'app/components/sys_info/manage/docs/docView.html'
    });
  }

})();
