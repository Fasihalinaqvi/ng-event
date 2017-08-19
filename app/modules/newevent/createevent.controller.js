(function(){
	'use strict';

	angular
		.module('eventApp')
		.controller('CreateEvent', CreateEvent);

	/** @ngInject */
	function CreateEvent($scope , $http ,$location){
		var vm = $scope;
		// vm.formData = {};
			vm.formData = {};


		var path = $location.search();
		
		var id =  path.eventID
		vm.status = id;
		// vm.statusDataType = typeof vm.status;



		// console.log('id with data type' , vm.status ,vm.statusDataType)
		vm.dataType = typeof id === 'undefined';


		console.log('dataType>>',vm.dataType)


		function submitEventUpdatedData() {
	        $http({
		       	method : "PUT",
		       	url : "http://localhost/web-services/public/index.php/api/event/"+id,
		       	data : vm.formData
		   	}).then(function mySuccess(response) {
		    	console.log(response)
		    	$location.path("/event_list"); 

		    }, function myError(response) {
		        $log.log("Error please fix");
		    });
	  

	    };

	    function submitEventData() {
	    	// vm.formData = {};
	        $http({
		       	method : "POST",
		       	url : "http://localhost/web-services/public/index.php/api/event",
		       	data : vm.formData
		   	}).then(function mySuccess(response) {
		    	console.log(response)
		    	$location.path("/event_list"); 

		    }, function myError(response) {
		        $log.log("Error please fix");
		    });
	  

	    };

	    if (vm.dataType !== true) {
	    	$http({
		       	method : "PATCH",
		       	url : "http://localhost/web-services/public/index.php/api/event/"+id,
		   	}).then(function mySuccess(response) {
		    	$scope.formData = response.data; 

		    }, function myError(response) {
		        console.log("Error please fix in get");
		    });
	    } 

	    vm.submit = function () {
		    vm.dataType ? submitEventData() : submitEventUpdatedData();
		}
	    	

		




		// if (dataType == number) {
		// 	console.log('yessss it is', id);
		// 	vm.submitEventUpdatedData = function() {
		//         $http({
		// 	       	method : "PUT",
		// 	       	url : "http://localhost/web-services/public/index.php/api/event"+id,
		// 	       	data : this.formData
		// 	   	}).then(function mySuccess(response) {
		// 	    	console.log(response)
		// 	    	$location.path("/event_list"); 

		// 	    }, function myError(response) {
		// 	        $log.log("Error please fix");
		// 	    });
		  

		//     };
		// } else{
		// 	//
		// 	vm.submitEventData = function() {
		//         $http({
		// 	       	method : "POST",
		// 	       	url : "http://localhost/web-services/public/index.php/api/event",
		// 	       	data : this.formData
		// 	   	}).then(function mySuccess(response) {
		// 	    	console.log(response)
		// 	    	$location.path("/event_list"); 

		// 	    }, function myError(response) {
		// 	        $log.log("Error please fix");
		// 	    });
		  

		//     };
		// }


	    // newwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww

	}

})();