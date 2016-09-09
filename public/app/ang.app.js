(function(angular) {
	'use strict';	
	angular.module('angtest', ['ngRoute', 'ngAria', 'ngAnimate', 'ui.bootstrap', 'angular-loading-bar','angular-confirm'])
	.run(function ($rootScope, $location, $log, VERSION) {
		$rootScope.VERSION = VERSION;
	}).config(['$logProvider','$httpProvider', function($logProvider,$httpProvider){
	    $logProvider.debugEnabled(false);
	}])
}) (window.angular);