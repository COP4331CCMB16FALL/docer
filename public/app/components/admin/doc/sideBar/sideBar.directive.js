(function(){
    var app = angular.module('app.admin.doc');

    app.directive("sideBar", function(){
        return{
            restrict: 'E',
            templateUrl: "/app/components/admin/doc/sideBar/sideBarView.html"
        };
    })
})();
