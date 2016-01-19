
(function(){
 angular.module('angularSpa')
.controller('perfilCtrl', function($http,$scope,localStorageService) {
$scope.getDataespecific = function() {
	
    var value = localStorageService.get('localStorageKey');
    $http({
        method: 'GET',
        url: "http://localhost:8080/proyectito/usuarios/buscarusuario/"+value,
       
        
     }).success(function(data){
        // With the data succesfully returned, call our callback
        $scope.data=data;
        console.log(data);
        
    }).error(function(){
        alert("error");
    });
 }
});
})();

