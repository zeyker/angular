(function(){
 'use strict';
    angular.module('angularSpa', [
    'ngRoute','LocalStorageModule', 'ngFileUpload'
    ])

 
    
    .config(function($routeProvider){
        $routeProvider
        .when('/home', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          })
        .when('/actors', {
            templateUrl:'views/actors.html',
            controller:'ActorsCtrl'
        })
        .when('/actorsinfo/:actorId', {
            templateUrl:'views/actorsinfo.html',
            controller:'ActorsinfoCtrl'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
          })
        .when('/editar', {
            templateUrl: 'views/editarusuario.html',
            controller: 'editarCtrl'
          })
        .when('/login', {
            templateUrl:'views/login.html',
            controller:'loginCtrl'
        })
        .when('/prueba', {
            templateUrl:'views/prueba.html',
            controller:'pruebaCtrl'
        })
        .when('/register', {
            templateUrl:'views/register.html',
            controller:'signupCtrl'
        })
        .when('/perfil', {
            templateUrl:'views/perfil.html',
            controller:'perfilCtrl'
        })
        .when('/publicar_adopcion', {
            templateUrl:'views/publicarAdopcion.html',
            controller:'PubAdopcionCtrl'
        })
        .when('/publicar_perdido', {
            templateUrl:'views/publicarPerdido.html',
            controller:'PubPerdidoCtrl'
        })
        .when('/maino', {
            templateUrl:'views/maino.html',
            controller:'mainoCtrl'
        })
        .when('/perdidos', {
            templateUrl:'views/perdidos.html',
            controller:'ViewPerdidosCtrl'
        })
        .when('/editar_publicacion', {
            templateUrl:'views/editarPublicacion.html',
            controller:'editarPubliCtrl'
        })
        .when('/delete_publicacion', {
            templateUrl:'views/deletePublicacion.html',
            controller:'deletePubliCtrl'
        })
        .when('/perdido/:perdidoId', {
            templateUrl: 'views/perdido.html',
            controller: 'PerdidoCtrl'
        }) 
        .when('/adopciones', {
            templateUrl:'views/adopciones.html',
            controller:'ViewAdopcionesCtrl'
        })    
        .when('/adopcion/:adopcionId', {
            templateUrl: 'views/adopcion.html',
            controller: 'AdopcionCtrl'
        }) 
        .otherwise({
            redirectTo: '/home'
          });
    }




    )
    .config(['localStorageServiceProvider', function(localStorageServiceProvider){
        localStorageServiceProvider.setPrefix('angularSpa');
    }]);



})();
