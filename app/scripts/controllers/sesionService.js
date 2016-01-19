(function(){
 angular.module('angularSpa')
.service('sesionService', function SesionService() {
	var sesionService=this;
	sesionService.message="default";
	this.getcaca = function() {
    	var p="hola";
    	return p;
 }

});
})();
