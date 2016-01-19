(function(){
 angular.module('angularSpa')
.service('dataService', function($http) {

this.getData = function(callbackFunc) {
    $http({
        method: 'GET',
        url: 'http://localhost:8080/proyectito/usuarios',
       
        
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
.controller('pruebaCtrl', function($scope, dataService,localStorageService) {
    $scope.data = null;


    dataService.getData(function(dataResponse) {
        $scope.data = dataResponse;
          var value = localStorageService.get('localStorageKey');
        console.log(value);
    });
});
})();