(function(){
    var app = angular.module('app.admin.doc');

    app.directive("docUpdate", function(){
        return{
            restrict: 'E',
            templateUrl: "/app/components/admin/doc/update/updateView.html"
        };
    })
})();
