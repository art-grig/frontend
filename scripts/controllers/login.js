'use strict';

angular.module('psJwtApp').controller('LoginCtrl', function ($scope, $state, alert, auth, $auth) {
	$scope.submit = function () {
		auth.login($scope.email, $scope.password).then(function (res) {
			var message = 'Hello ' + res.data.username + '!';
			alert('success', 'Welcome', message);
			$state.go('main');
		}).catch(handleError);
	};

	$scope.authenticate = function (provider) {
		$auth.authenticate(provider).then(function (res) {
			alert('success', 'Welcome', 'Hello ' + res.data.username + '!');
		}, handleError);
	}

	function handleError(err) {
		alert('warning', 'Something went wrong :(', err.message);
	}
});