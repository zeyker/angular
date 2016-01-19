


(function(){
    angular.module('angularSpa')
    .controller('signupCtrl', function($scope, $http){
        $scope.addPost = function (){
            
            $http({
                method: 'POST',
                url: 'http://localhost:8080/proyectito/usuarios/crearusuario',
                data: {
                     
                "idUsuario":$scope.newId,
                "contrasena":$scope.newContrasena,
                "correo":$scope.newCorreo,
                "ipUltimoLogeo":"224",
                "nombreUsuario":$scope.newNombre,
                "tipoUsuario":"1",
                "activoUsuario":"1"
          
            },
        headers: {'Content-Type': 'application/json'}
        }).then(function(data,status,headers,config){

                $scope.status = 'Registrado Correctamente';
                alert("Registrado Correctamente");
                

            },
            function(error,status,headers,config){
                $scope.status = 'Error Usuario existente';
                    
                                                console.log(error)


            });

        }

          



    });
    
})();