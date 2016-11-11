(function(){

 var app = angular.module('app.home');

	//controls the groups assigned to a user and how they are displayed

    CarouselController.$inject = ['$scope', 'Restangular'];
    
    function CarouselController($scope, Restangular) {
        //var slides = $scope.slides = [];
        //var currIndex = 0;
        
        //REST call to the back end
        Restangular.all('test').getList().then(function(response) {
            var plain = response.plain();
            $scope.slides = plain;
            console.log("carousel rest: ", plain);
        });


        // function addSlide() {
        //     var newWidth = 600 + slides.length + 1;
        //     slides.push({
        //         image: '//unsplash.it/' + newWidth + '/300',
        //         text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
        //         //active: currIndex==0,
        //         id: currIndex++
        //     });
        // };
    
        // for (var i = 0; i < 4; i++) {
        //     addSlide();
        // }
        
        
    };

 	app.directive('carousel', function(){
		return{
			restrict: 'E',
			templateUrl: "/app/components/home/directives/carousel/carouselView.html",
            controller: CarouselController
		};
	});

})();
