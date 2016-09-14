'use strict';

var app = angular.module('psJwtApp', ['ui.router', 'ngAnimate', 'satellizer', 'infinite-scroll','jkAngularRatingStars'	]);

	app.filter('trustUrl', function ($sce) {
	return function (recordingUrl) {
		return $sce.trustAsResourceUrl(recordingUrl);
	};
	});
	app.factory('Reddit', function($http, API_URL) {
	var Reddit = function() {
		this.items = [];
		this.busy = false;
	};

	Reddit.prototype.nextPage = function() {
		if (this.busy) return;
		this.busy = true;

		var url = API_URL + "videos?skip=" + this.items.length + "&limit=10";
		console.log(url);
		$http.get(url).success(function(videos) {
			var items = videos.data;
			console.log(items);
			for (var i = 0; i < items.length; i++) {
				this.items.push(items[i]);
			}
			this.busy = false;
		}.bind(this));
	};

	return Reddit;
});
