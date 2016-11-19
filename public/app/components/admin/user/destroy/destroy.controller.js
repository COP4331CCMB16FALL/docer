(function(){
    var app = angular.module('app.admin.user');

    app.controller("DestroyController", DestroyController);
    
    DestroyController.$inject = ['$scope', 'AdminUserService'];

    function DestroyController($scope, AdminUserService){
        
        this.search = function() {
            AdminUserService.readUser(this.userid).then(function(data){
                $scope.name = data.name;
                $scope.email = data.email;
                $scope.create = data.created_at;
                $scope.update = data.updated_at;
            });
        };
        
        this.destroy = function() {
            AdminUserService.destroyUser(this.userid).then(function(data){
                $scope.message = data;
            });
        };
   }
})();
