(function(){
	'use strict';

	angular
		.module('eventApp')
		.controller('eventController', eventController);

	/** @ngInject */
	function eventController(events){
		var vm = this;
		vm.events = events


		// function eventData(event_title, name, date_of_event, time_of_event, date_of_reminder, time_of_reminder, event_description){
		// 	vm.event_title 			= event_title;
		// 	vm.name 				= name;
		// 	vm.date_of_event 		= date_of_event;
		// 	vm.time_of_event 		= time_of_event;
		// 	vm.date_of_reminder 	= date_of_reminder;
		// 	vm.time_of_reminder 	= time_of_reminder;
		// 	vm.event_description 	= event_description;
		// }
		// console.log(eventData);
		
		// Expose functions
		// vm.eventData = eventData;
		 
	}

})();