
(function(){
    angular.module('angularSpa')
    .controller('loginCtrl', function($scope, $http,localStorageService){
        
        $scope.logPost = function (){
            
            $http({
                method: 'POST',
                url: 'http://localhost:8080/proyectito/usuarios/logearusuario',
                data: {
                "nombreUsuario":$scope.newNombre,     
                "contrasena":$scope.newContrasena
                
          
            },
        headers: {'Content-Type': 'application/json'}
        }).success(function(data){
        // With the data succesfully returned, call our callback
         localStorageService.set('localStorageKey',data.idUsuario);

          var value = localStorageService.get('localStorageKey');
                  console.log(value);


    }).error(function(){
        alert("Usuario incorrecto");
    });

        }

    });
    
})();


