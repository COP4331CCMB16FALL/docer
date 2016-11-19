(function(){
    var app = angular.module('app.admin.user');

    app.controller("ReadController", ReadController);
    
    ReadController.$inject = ['$scope', 'AdminUserService'];

    function ReadController($scope, AdminUserService){
        
        this.search = function() {
            AdminUserService.readUser(this.userid).then(function(data){
                $scope.name = data.name;
                $scope.email = data.email;
                $scope.create = data.created_at;
                $scope.update = data.updated_at;
            });
        };
   }
})();
