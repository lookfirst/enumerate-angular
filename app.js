import angular from 'angular';
import enumerate from './enumerate';

var app = angular.module('app', [enumerate.name]);

app.controller('AppController', ['$scope', '$timeout', function($scope, $timeout) {
	$scope.value = '$1,234.45';
	$scope.size = 'enumerate-large';

	$timeout(function() {
		console.log('setting value...');
		$scope.value = '123';
		$scope.size = 'enumerate-small';
	}, 3000);
}]);

angular.bootstrap(document, ['app']);
