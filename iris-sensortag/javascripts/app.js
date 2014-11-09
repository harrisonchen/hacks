var app = angular.module('iris', []);

app.controller('MainCtrl', ['$scope', '$window', function($scope, $window){

	var finishScroll = false;

	var titles  = document.getElementsByClassName("title");
	var parallax_2 = titles[1];
	$scope.class_2 = false;
	var parallax_2_pos = titles[0].offsetTop + titles[0].clientHeight +
						  titles[1].offsetTop + titles[1].clientHeight;

	$scope.checkPositions = function(){
		if(($scope.scrollPos + $window.innerHeight) >= parallax_2_pos){
			$scope.color_2 = true;
		}
	}

	angular.element($window).bind("scroll", function(e){
		if(!finishScroll){
			$scope.scrollPos = window.top.scrollY;
			$scope.checkPositions();
			console.log($scope.scrollPos);
		}
	});
}]);