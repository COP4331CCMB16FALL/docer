(function(){
    var app = angular.module('app.group.create');
    
    app.directive("createGroup", function(){
        return{
            restrict: 'E',
            templateUrl: "/app/components/groups/create/createVew.html"
        };
    })
})();