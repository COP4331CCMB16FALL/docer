(function(){
    var app = angular.module('app.admin.doc');

    app.directive("docRead", function(){
        return{
            restrict: 'E',
            templateUrl: "/app/components/admin/doc/read/readView.html"
        };
    })
})();
