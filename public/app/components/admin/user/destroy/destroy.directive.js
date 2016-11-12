(function(){
    var app = angular.module('app.admin');

    app.directive("userDestroy", function(){
        return{
            restrict: 'E',
            templateUrl: "/app/components/admin/user/destroy/destroyView.html"
        };
    })
})();
