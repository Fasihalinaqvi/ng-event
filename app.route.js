(function(){

	'use strict';
	angular
		.module('eventApp')
		.config(routeConfig);

	function routeConfig($stateProvider, $urlRouterProvider) {
      	$stateProvider
	        .state('eventlist', {
	          url: '/event_list',
	          templateUrl: 'app/modules/eventlist/events.html',
	          controller: 'actionEvent',
	          controllerAs: 'vm'
	        }).state('createevent', {
	          url: '/create_event',
	          templateUrl: 'app/modules/newevent/create.html',
	          controller: 'CreateEvent',
	          controllerAs: 'vm'
	        })
	        
    }	
})()