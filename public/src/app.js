angular.module('ContactsApp', ['ngRoute','ngResource','ngMessages'])
	.config(function ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/contacts', {
				templateUrl: 'views/list.html',
				controller: 'ListController'
			})
			.when('/contact/new', {
				templateUrl: 'views/new.html',
				controller: 'NewController'
			});
		$locationProvider.html5Mode(true);
	});