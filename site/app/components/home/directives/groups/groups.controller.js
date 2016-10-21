(function(){
    
 var app = angular.module('app.home');
	
	//controls the groups assigned to a user and how they are displayed
	app.controller("GroupList", ['$scope', function($scope)
	{
		
		//use some data service to do a rest call to a database
		$scope.groups = [
			{id: 1, text: 'guest'},
			{id: 2, text: 'user'},
			{id: 3, text: 'customer'},
			{id: 4, text: 'admin'}
		  ];
		  $scope.user = {
			groups: [2, 4]
		  };
		
	}]);


	
})();