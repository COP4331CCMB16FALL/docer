(function(){
    var app = angular.module('app.home');
    
 	app.directive('home', function(){
		return{
			restrict: 'E',
			templateUrl: "/app/components/home/homeView.html",
		};
	});
})();