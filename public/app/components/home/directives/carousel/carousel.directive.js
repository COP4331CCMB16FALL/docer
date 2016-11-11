(function(){

 var app = angular.module('app.home');

	//controls the groups assigned to a user and how they are displayed

    CarouselDemoCtrl.$inject = ['$scope'];
    
    function CarouselDemoCtrl($scope) {
        //$scope.myInterval = 5000;
        //$scope.noWrapSlides = false;
        //$scope.active = 0;
        var slides = $scope.slides = [];
        var currIndex = 0;

        $scope.addSlide = function() {
            var newWidth = 600 + slides.length + 1;
            slides.push({
                image: '//unsplash.it/' + newWidth + '/300',
                text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
                //active: currIndex==0,
                id: currIndex++
            });
        };
    
        for (var i = 0; i < 4; i++) {
            $scope.addSlide();
        }
    };

 	app.directive('carousel', function(){
		return{
			restrict: 'E',
			templateUrl: "/app/components/home/directives/carousel/carouselView.html",
            controller: CarouselDemoCtrl
		};
	});

})();
