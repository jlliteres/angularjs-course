(function ()
{
	'use strict';

	angular.module('NameCalculator', []) 

	.controller('NameCalculatorController', function($scope) 
	{
		$scope.name = "";
		$scope.total = 0;
		$scope.displayValue = function() 
		{
			var totalValue = CalculateValueFromString($scope.name);
			$scope.total = totalValue;
		};
	});

	function CalculateValueFromString (string) 
	{
		var stringValue = 0;
		for (var i = 0; i < string.length; i++) 
		{
			stringValue += string.charCodeAt(i);
		}
		return stringValue;
	}
})();