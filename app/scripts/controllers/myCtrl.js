angular.module('angularSpa')
.controller('myCtrl', function ($scope, $http) {
    $scope.hello = {name: "Boaz"};
    $scope.newName = "";
    $scope.sendPost = function() {
        var data = $.param({
            json: JSON.stringify({
                nombreUsuario: $scope.newName,
                "correo":"$scope.newUsuario.CORREO,",
                "contrasena":"$scope.newUsuario.CONTRASENA",
                "tipoUsuario":"true",
                "activoUsuario":"true",
                "idUsuario":"2",
                "ipUltimoLogeo": "2"
            })
        });
        $http.post("http://localhost:8080/proyectito/usuarios/crearusuario", data).success(function(data, status) {
            $scope.hello = data;
        })
    }                   
})