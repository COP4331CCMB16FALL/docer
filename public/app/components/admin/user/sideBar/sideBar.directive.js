(function(){
    var app = angular.module('app.admin.user');

    app.directive("sideBar", function(){
        return{
            restrict: 'E',
            templateUrl: "/app/components/admin/user/sideBar/adminUserView.html"
        };
    })
})();
