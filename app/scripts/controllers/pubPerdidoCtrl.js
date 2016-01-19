(function(){
    angular.module('angularSpa')
    .controller('PubPerdidoCtrl', function($scope, $http,localStorageService){
         var idUser = localStorageService.get('localStorageKey');

        $scope.addPostPerdido = function (){
            
             $http({
                method: 'POST',
                url: 'http://localhost:8080/proyecto/publicaciones',
                data: {

                    "usuario":{"idUsuario":+idUser},
                    "activoPublicacion":"1",
                    "estadoPublicacion":"1",
                    "descripcion":$scope.newDescripcion,
                    "titulo":$scope.newTitulo,
                    "fonoContacto":$scope.newFono, 
                    "email":$scope.newEmail, 
                    "fechaPublicacion":"2016-01-14 21:58:22"

            },

        headers: {'Content-Type': 'application/json'}
        }).then(function(data,status,headers,config){

                $scope.status = 'Publicado Correctamente';
                alert("Publicado Correctamente");

            },
            function(error,status,headers,config){
                $scope.status = 'Error al crear la publicación';
                alert("Error al crear la publicación");
                    
                                                console.log(error)
            });
        }
    });
})();