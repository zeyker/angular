(function(){
    angular.module('angularSpa')
    .controller('editarPubliCtrl', function($scope, $http,localStorageService){
         var idPubli = localStorageService.get('localStorageIdPubli');

        $scope.editPublicacion = function (){
            
            $http({
                method: 'PUT',
                url: 'http://localhost:8080/proyectito/publicaciones/1',
                data: {
                     
                "titulo":$scope.newTitulo,
                "descripcion":$scope.newDescripcion,
                "fonoContacto":$scope.newFonoContacto,
                "email":$scope.newEmail,
                "activoPublicacion":"1",
                "estadoPublicacion":"1",
                "fechaPublicacion": "2016-01-14 21:58:22",
                "permissions":["http://*/"],


            },
        headers: {'Content-Type': 'application/json'}
        }).then(function(data,status,headers,config){

                $scope.status = 'Editado Correctamente';
                

            },
            function(error,status,headers,config){
                $scope.status = 'Error ';
                    
                                                console.log(error)


            });

        }

          



    });
    
})();