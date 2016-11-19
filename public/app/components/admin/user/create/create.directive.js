(function(){
    var app = angular.module('app.admin.user');

    app.directive("userCreate", function(){
        return{
            restrict: 'E',
            scope: {show: '='},
            templateUrl: "/app/components/admin/user/create/createView.html",
            controller: 'CreateController',
            controllerAs: "createCtrl"
        };
    })
})();
