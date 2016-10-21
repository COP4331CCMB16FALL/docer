(function() {
  'use strict';

  angular
    .module('app', [
      // Angular modules.
		'ngRoute',
		//'mgcrea.ngStrap', //angular-strap
		'ngAnimate',
		'ngSanitize',
	  	"checklist-model",
	  	"angularModalService",
	  	"ngCookies",
	  
      
      	/*custom*/
		'app.nav',
		'app.home', /*'app.home.groups', 'app.home.settings',*/
		'app.upload',
		'app.account',
	  	'app.logout',
	  	'app.group.create'
		
      
    ])
    .config(configFunction)
  	.run(run);

    configFunction.$inject = ['$routeProvider'];
    
    function configFunction($routeProvider, $locationProvider, $httpProvider) {
        $routeProvider.otherwise({
            redirectTo: '/'
    });
  };

run.$inject = ['$rootScope', '$location', '$cookieStore', '$http' ];
    function run($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
		
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/');
            }
        });
    }  

})();