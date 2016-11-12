(function(){
    var app = angular.module('app.admin');

    app.directive("sys", function() {
        return {
            restrict: "E",
            templateUrl: "/app/components/admin/doc/systemView.html",
            controller: SystemController,
            controllerAs: "sysCtrl"
        };
      });
})();
