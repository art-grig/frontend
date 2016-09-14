'use strict';

angular.module('psJwtApp')
	.controller('JobsCtrl', function ($scope,$state, $http, $sce, API_URL, alert, Reddit) {
		$scope.reddit = new Reddit();
        $scope.firstRate = 0;
		$scope.onItemRating = function(rating){

		};
		$scope.getVideoUrl=function(url){
			console.log(url);
			return $sce.trustAsResourceUrl(url);
		};
		$http.get(API_URL+'videos?skip=1&limit=1').success(function (videos) {
			$scope.videos = videos.data;
			console.log(videos);
		}).error(function (err) {
			alert('warning', "You should login", err.message); //TODO: Handle each error type
		});
	});