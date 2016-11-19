(function(){
    var app = angular.module('app.admin.user');

    app.controller("CreateController", CreateController);
    
    CreateController.$inject = ['$scope', 'AdminUserService'];

    function CreateController($scope, AdminUserService){
        
        this.create = function() {
            AdminUserService.createUser(this.user).then(function(data){
                $scope.message = data;
            });
        };
   }
})();
