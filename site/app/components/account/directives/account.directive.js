(function(){
    var app = angular.module('app.account');
    
    app.directive("account", function(){
        return{
            restrict: 'E',
            templateUrl: "/app/components/account/accountView.html"
        };
    })
})();