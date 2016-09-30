(function() {
  'use strict';

  angular
    .module('app.upload')
    .config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider.when('/upload', {
      templateUrl: 'app/components/upload/uploadView.html'
    });
  }

})();