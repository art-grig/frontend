'use strict';

angular.module('psJwtApp')
	.controller('HeaderCtrl', function ($scope, auth) {
		$scope.isAuthenticated = function() {
			return auth.isAuthenticated();
		}
	});