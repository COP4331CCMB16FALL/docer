(function() {
  'use strict';

  angular
    .module('app.account')
    .config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider.when('/account', {
      templateUrl: 'app/components/account/accountView.html'
    });
  }

})();