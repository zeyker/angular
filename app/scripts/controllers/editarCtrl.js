(function(){
    angular.module('angularSpa')
    .controller('editarCtrl', function($scope, $http,localStorageService){
         var value = localStorageService.get('localStorageKey');

        $scope.edit = function (){
            
            $http({
                method: 'PUT',
                url: 'http://localhost:8080/proyectito/usuarios/editarusuario/'+value,
                data: {
                     
                "idUsuario":+value,
                "contrasena":$scope.newContrasena,
                "correo":"$scope.newCorreo",
                "ipUltimoLogeo":"224",
                "nombreUsuario":$scope.newNombre,
                "tipoUsuario":"1",
                "activoUsuario":"1",
                "permissions":["http://*/"]         
          
            },
        headers: {'Content-Type': 'application/json'}
        }).then(function(data,status,headers,config){

                $scope.status = 'Registrado Correctamente';
                

            },
            function(error,status,headers,config){
                $scope.status = 'Error Usuario existente';
                    
                                                console.log(error);


            });

        }

          



    });
    
})();