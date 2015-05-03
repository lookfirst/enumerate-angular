import angular from 'angular';

var enumerate = angular.module('enumerate-angular', []);

enumerate.directive('enumerate', function() {
	return {
		restrict: 'C',
		scope: {
			value: '=',
			size: '='
		},
		replace: false,
		controller: ['$scope', function($scope) {

			if (!$scope.size) {
				$scope.size = 'enumerate-large';
			}

			var processValue = function(value) {
				var splitData = [];

				for (var i of value.split("")) {
					var style = null;

					if (i === ',' || i === '.') {
						style = 'punc';
					} else if (i === '$') {
						style = 'money';
					}

					splitData.push({
						char: i,
						style: style
					})
				}

				return splitData;
			};

			$scope.$watch('value', function() {
				$scope.cols = processValue($scope.value);
			});
		}],
		template:
			'<div ng-repeat="col in cols" ng-class="[size, col.style]">' +
				'<span ng-bind="col.char"></span>' +
			'</div>'
	};
});

export default enumerate;
