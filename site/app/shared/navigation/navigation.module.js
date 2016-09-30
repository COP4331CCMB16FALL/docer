(function(){
   angular.module('app.nav', [])
 
	.directive('navigation', function(){
        return{
            restrict: 'E',
            templateUrl: "/app/shared/navigation/navView.html"
        };
    });
	/*.config(function($dropdownProvider) {
	   angular.extend($dropdownProvider.defaults, {
		   html: true
	   });
   	})
	*/
	//root scope will be used to store checks to see if an account is logged in or not
	function NavCtrl($rootScope, $scope, $location)
	{
		
		/*TODO Fix conditional buttons (login/out) based on root scope */
		$scope.dropdown = [
			{
				"text": "<i class=\"fa fa-download\"></i>&nbsp;Groups",
				"href": "#/Groups",
				"active": true
			},
			{
				"divider": true
			},
			{
				"text": "<i class=\"fa fa-sign-out\" ng-show=\"loggedIn\"> Logout </i>",
				"href": "#/logout"
			},
			{
				"text": "<i class=\"fa fa-sign-in\" aria-hidden=\"true\"  ng-hide=\"loggedIn\"> Login<\i>",
				"href": "#/login"
			}
			
		];

	};
})();