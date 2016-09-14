'use strict';

angular.module('psJwtApp')
	.controller('LogoutCtrl', function (auth, $state, alert) {
		auth.logout();
		alert('warning','You should login!');
		$state.go('main');
	});