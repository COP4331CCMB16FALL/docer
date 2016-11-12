(function(){
    var app = angular.module('app.admin');

    app.directive("docRead", function(){
        return{
            restrict: 'E',
            templateUrl: "/app/components/admin/doc/create/createView.html"
        };
    })
})();
