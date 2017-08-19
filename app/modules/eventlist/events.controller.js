(function(){
	'use strict';

	angular
		.module('eventApp')
		.controller('actionEvent', actionEvent);

	/** @ngInject */
	function actionEvent($scope , $http ,$location){
		console.log('here in actioin event')
		// var $scope = $scope;

		// $scope.formData = {};
		
		$http({
	       	method : "GET",
	       	url : "http://localhost/web-services/public/index.php/api/event",
	   	}).then(function mySuccess(response) {
	    	$scope.user = response.data; 
	    	console.log('asdasdas',$scope.user)


	    }, function myError(response) {
	        $log.log("Error please fix");
	    });

		$scope.removeEvent = function(id) {
	        $http({
		       	method : "DELETE",
		       	url : "http://localhost/web-services/public/index.php/api/event/" +id
		   	}).then(function mySuccess(response) {
		    	console.log(response)
		    	// $scope.formData.splice(id, 1);
		    	$location.path("/event_list"); 

		    }, function myError(response) {
		        $log.log("Error please fix");
		    });
	  

	    };

	    $scope.updateEvent = function(id) {
	    	$location.path('/create_event').search({eventID: id});
 
	    };
	}

})();