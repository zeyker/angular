(function(){
angular.module('angularSpa')
//.controller('PerdidoCtrl', function($http, $scope, $routeParams) {
.controller('AdopcionCtrl', function($http, $scope, $routeParams) {
   // var idPubli = $routeParams.idPublicacion;
   //console.log("hola");

$scope.getDataPerdido = function(adopcionId) {
    console.log("hola");
    console.log(idPubli);
    $http({
        method: 'GET',
        url: 'http://localhost:8080/proyectito/publicaciones/'+adopcionId
        
        
     }).success(function(data){
        // With the data succesfully returned, call our callback
        $scope.dataPerdido=data;
        console.log(data);
        
    }).error(function(){
        alert("error");
    });
 }
});
})();
