(function(){
    var app = angular.module('app.admin.user');

    app.directive("userUpdate", function(){
        return{
            restrict: 'E',
            templateUrl: "/app/components/admin/user/update/updateView.html"
        };
    })
})();
