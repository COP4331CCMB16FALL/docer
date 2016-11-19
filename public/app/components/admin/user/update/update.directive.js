(function(){
    var app = angular.module('app.admin.user');

    app.directive("userUpdate", function(){
        return{
            restrict: 'E',
            scope: {show: '='},
            templateUrl: "/app/components/admin/user/update/updateView.html",
            controller: 'UpdateController',
            controllerAs: "updateCtrl"
        };
    })
})();
