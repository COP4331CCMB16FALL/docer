(function(){
    var app = angular.module('app.admin.user');

    app.controller("CategoryController", CategoryController);

    function CategoryController(){
       this.tab = 1;

       this.isSet = function(checkTab) {
           return this.tab === checkTab;
       };

       this.setTab = function(activeTab) {
           this.tab = activeTab;
       };
   }
})();
