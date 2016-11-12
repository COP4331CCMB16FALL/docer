(function(){
    var app = angular.module('app.admin.user');

    app.directive("userRead", function(){
        return{
            restrict: 'E',
            templateUrl: "/app/components/admin/user/read/readView.html"
        };
    })
})();
