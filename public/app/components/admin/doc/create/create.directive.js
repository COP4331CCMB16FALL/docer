(function(){
    var app = angular.module('app.admin.doc');

    app.directive("docCreate", function(){
        return{
            restrict: 'E',
            templateUrl: "/app/components/admin/doc/create/createView.html"
        };
    })
})();
