(function() {
  'use strict';

  angular
    .module('app.manage.users')
    .config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider.when('/manage/users', {
      templateUrl: 'app/components/sys_info/manage_users/manageUsersView.html'
    });
  }

})();
