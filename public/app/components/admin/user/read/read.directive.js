(function(){
    var app = angular.module('app.admin.user');

    app.directive("userRead", function(){
        return{
            restrict: 'E',
            scope: {show: '='},
            templateUrl: "/app/components/admin/user/read/readView.html",
            controller: 'ReadController',
            controllerAs: "readCtrl"
        };
    })
})();
