(function() {
  'use strict';

  angular
    .module('app.manage.users')
    .config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider.when('/admin/users', {
      templateUrl: 'app/components/sys_info/manage/users/usersView.html'
    });
  }

})();
