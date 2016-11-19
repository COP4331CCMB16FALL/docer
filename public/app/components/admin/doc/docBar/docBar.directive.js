(function(){
    var app = angular.module('app.admin.doc');

    app.directive("docBar", function(){
        return{
            restrict: 'E',
            templateUrl: "/app/components/admin/doc/docBar/docBarView.html"
        };
    })
})();
