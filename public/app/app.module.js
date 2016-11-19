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
	  	'restangular',
	  	"ngMaterial",


      	/*custom*/
		'app.nav',
		'app.home', /*'app.home.groups', 'app.home.settings',*/
		'app.upload',
		'app.search',
		'app.account',
	  	'app.group.create',

	  	'app.admin',
        'app.admin.doc',
        'app.admin.user',
        'app.admin.system'

    ])
    .config(configFunction)
    .run(run);

    configFunction.$inject = ['RestangularProvider', '$routeProvider'];

    function configFunction(RestangularProvider, $routeProvider, $locationProvider, $httpProvider) {
        $routeProvider.otherwise({
            redirectTo: '/'
        });

        //set rest base url
        RestangularProvider.setBaseUrl('/api');
    };
	run.$inject = ['$rootScope', '$location', '$cookieStore', '$http' ];

    function run($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh

        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Bearer ' + $rootScope.globals.currentUser.token; //Bearer token
        }

        // maximus - test see if authentication is working
        //$http.get('/api/authenticate')
        //    .success(function (data) {
        //        console.log(data);
        //    });


        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;

            //set the root scope loggedIn value for the nav bar to show login or logout
            if(loggedIn)
                $rootScope.loggedIn = true;
            else
                $rootScope.loggedIn = false;

            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }

})();
