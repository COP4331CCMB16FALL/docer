(function(){

 var app = angular.module('app.home');

	//controls the groups assigned to a user and how they are displayed
    app.directive('groupList', function(){
		return{
			restrict: 'E',
			templateUrl: "/app/components/home/directives/groups/groupsView.html",
            controller: GroupList,
            controllerAs:"groupList"
		};
	});

    var GroupList = function($scope)
	{

		//use some data service to do a rest call to a database

	       $scope.groups = [
                {id:1,  text:"Harambe"},
                {id:2,  text:"Trump"},
                {id:3,  text:"Pepe"}
            ];

	};
    GroupList.$inject = ['$scope'];






})();
