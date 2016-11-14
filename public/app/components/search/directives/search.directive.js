(function(){
    var app = angular.module('app.search');
    
    app.directive("search", function(){
        return{
            restrict: 'E',
            templateUrl: "/app/components/search/searchView.html"
        };
    })
})();