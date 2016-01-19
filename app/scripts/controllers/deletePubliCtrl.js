(function(){
    angular.module('angularSpa')
    .controller('deletePubliCtrl', function($scope, $http){

        $scope.deletePublicacion = function (){
            $http({
                method: 'DELETE',
                url: 'http://localhost:8080/proyectito/publicaciones/1',
        headers: {'Content-Type': 'application/json'}
        }).then(function(data,status,headers,config){
                $scope.status = 'Eliminado Correctamente';
                alert('Eliminado Correctamente');
            },
            function(error,status,headers,config){
                $scope.status = 'Error ';
                alert('Eliminado Correctamente');
            });
        }
    });
})();