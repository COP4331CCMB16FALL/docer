(function(){
    var app = angular.module('app.admin.user');

    app.controller("UpdateController", UpdateController);
    
    UpdateController.$inject = ['$scope', 'AdminUserService'];

    function UpdateController($scope, AdminUserService){
        
        this.search = function() {
            AdminUserService.readUser(this.userid).then(function(data){
                $scope.name = data.name;
                $scope.email = data.email;
                $scope.create = data.created_at;
                $scope.update = data.updated_at;
            });
        };
        
        this.update = function() {
            console.log($scope.name);
            console.log($scope.email);
            AdminUserService.updateUser(this.userid, $scope.name, $scope.email).then(function(data){
                $scope.message = data;
            });
        };
   }
})();
