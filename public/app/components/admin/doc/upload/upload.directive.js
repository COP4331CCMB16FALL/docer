(function(){
    var app = angular.module('app.admin');

    app.directive("docDestroy", function(){
        return{
            restrict: 'E',
            templateUrl: "/app/components/admin/doc/upload/upload.html"
        };
    })
})();
