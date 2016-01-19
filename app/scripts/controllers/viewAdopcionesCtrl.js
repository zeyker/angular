(function(){
angular.module('angularSpa')
.service('dataService', function($http) {

this.getData = function(callbackFunc) {
    $http({
        method: 'GET',
        url: 'http://localhost:8080/proyectito/publicaciones',
       
        
     }).success(function(data){
        // With the data succesfully returned, call our callback
        callbackFunc(data);
    }).error(function(){
        alert("error");
    });
 }
});
})();

(function(){
angular.module('angularSpa')    
.controller('ViewAdopcionesCtrl', function($scope, dataService) {
    //$scope.data = null;
    dataService.getData(function(dataResponse) {
        $scope.data = dataResponse;
         console.log(dataResponse)
    });
});
})();