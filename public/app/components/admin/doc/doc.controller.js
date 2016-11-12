(function(){
    var app = angular.module('app.admin.doc');

    app.controller("catCtrl", CategoryController);

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
