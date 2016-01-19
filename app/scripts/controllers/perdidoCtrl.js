(function(){
angular.module('angularSpa')
//.controller('PerdidoCtrl', function($http, $scope, $routeParams) {
.controller('PerdidoCtrl', function($http, $scope, $routeParams) {
   // var idPubli = $routeParams.idPublicacion;
   //console.log("hola");

$scope.getDataPerdido = function(perdidoId) {
    console.log("hola");
    console.log(idPubli);
    $http({
        method: 'GET',
        url: 'http://localhost:8080/proyectito/publicaciones/'+perdidoId
        
        
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


/*(function(){
angular.module('angularSpa')    
.controller('PerdidoCtrl', function($scope, dataService) {
    $scope.data = null;
    dataService.getDataPerdido(function(dataResponse) {
        $scope.data = dataResponse;
         console.log(dataResponse);
    });
});
})();
*/