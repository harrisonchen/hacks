var app = angular.module('iris', []);

app.controller('MainCtrl', ['$scope', '$window', function($scope, $window){

	var finishScroll = false;

	var titles  = document.getElementsByClassName("title");
	var height = $window.innerHeight;
	var p9 = height + height / 2;
	var p2 = p9 + height;
	var p3 = p2 + height;
	var p4 = p3 + height;
	var p10 = p4 + height;

	var parallax_2 = titles[1];
	var parallax_10 = titles[2];
	$scope.class_2 = false;
	$scope.class_10 = false;
	$scope.class_android = false;
	var parallax_2_pos = titles[0].offsetTop + titles[0].clientHeight +
						  titles[1].offsetTop + titles[1].clientHeight;
  var parallax_10_pos = parallax_2_pos + titles[2].offsetTop + titles[2].clientHeight;

	$scope.checkPositions = function(){
		if(($scope.scrollPos + $window.innerHeight) >= p2){
			$scope.class_2 = true;
			$scope.class_android = true;
			$scope.$apply();
		}
		if(($scope.scrollPos + $window.innerHeight) >= p10){
			$scope.class_10 = true;
			$scope.$apply();
			finishScroll = true;
		}
	}

	angular.element($window).bind("scroll", function(e){
		if(!finishScroll){
			$scope.scrollPos = window.top.scrollY;
			$scope.checkPositions();
			console.log($scope.scrollPos + $window.innerHeight);
		}
	});
}]);