(function() {
    var app = angular.module('app.admin');
    app.config(configFunction);

    configFunction.$inject = ['$routeProvider'];

    function configFunction($routeProvider) {
        $routeProvider.when('/admin', {
            templateUrl: 'app/components/admin/adminPanel.html'
    });
    }

})();
