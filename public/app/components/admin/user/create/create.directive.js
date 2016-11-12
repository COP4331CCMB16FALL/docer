(function(){
    var app = angular.module('app.admin');

    app.directive("userCreate", function(){
        return{
            restrict: 'E',
            templateUrl: "/app/components/admin/user/create/createView.html"
        };
    })
})();
