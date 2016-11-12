(function(){
    var app = angular.module('app.admin');

    app.directive("doc", function() {
           return {
              restrict: "E",
              templateUrl: "/app/components/admin/doc/mainDocumentPanel.html",
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
              controllerAs: "catCtrl"
           };
      });
})();
