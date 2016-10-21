(function(){
    var app = angular.module('app');
    
    app.directive("login", function(){
        return{
            restrict: 'E',
            templateUrl: "/app/components/auth/login/loginView.html",
			controler: 'LoginController',
			controllerAs: "loginController"
        };
    })
})();