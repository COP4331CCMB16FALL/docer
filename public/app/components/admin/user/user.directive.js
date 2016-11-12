(function(){
    var app = angular.module('app.admin');

    app.directive("user", function() {
           return {
              restrict: "E",
              templateUrl: "/app/components/admin/user/adminMainUserView.html",
              controller: function()
               {
                  this.tab = 1;

                  this.isSet = function(checkTab) {
                      return this.tab === checkTab;
                  };

                  this.setTab = function(activeTab) {
                      this.tab = activeTab;
                  };
              },
              controllerAs: "userCtrl"
           };
      });
})();
