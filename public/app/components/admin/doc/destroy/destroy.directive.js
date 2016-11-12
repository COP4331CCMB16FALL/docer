(function(){
    var app = angular.module('app.admin.doc');

    app.directive("docDestroy", function(){
        return{
            restrict: 'E',
            templateUrl: "/app/components/admin/doc/destroy/destroyView.html"
        };
    })
})();
