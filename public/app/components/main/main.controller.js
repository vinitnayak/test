(function(angular) {
       'use strict';
       angular.module('angtest').controller('MainCtrl', ['$log', '$routeParams','$location','$attrs','Users', function ($log, $routeParams,$location,$attrs,Users) {
    	   var ctrl = this;           
           this.$onInit = function() {	
        	   ctrl.title='Testing';
        	   ctrl.loadUsers();
      		};
      		ctrl.loadUsers = function(){
      			Users.getAllUsers(
      					function(response) {
      						$log.error("Success: " + response);
      					}, 
      					function(response) {
      						$log.error("Error: " + response);
      					})
      		};
       }]);
})(window.angular);
