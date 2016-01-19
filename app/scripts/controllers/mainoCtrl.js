
(function(){angular.module('angularSpa')
    .controller('mainqwCtrl', ['$base64', '$scope', function($base64, $scope) {


            $scope.encoded = $base64.encode($scope.imge);
            $scope.decoded = $base64.decode($scope.encoded);
             $scope.upload = function() {
                    console.log($scope.imge);
                    console.log($scope.imge);
                    console.log($scope.encoded);
                    console.log($scope.decoded);

    };
    }]);

})();

(function(){angular.module('angularSpa')
.controller('mainoCtrl', ['$scope', 'Upload', '$timeout', 'localStorageService',function ($scope, Upload, $timeout,$http,localStorageService) {
    $scope.uploadFiles = function(file, errFiles) {
        $scope.f = file;
        $scope.errFile = errFiles && errFiles[0];
        if (file) {
            file.upload = Upload.upload({
                url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                data: {file: file}

            });

                 console.log(file);

      
            localStorageService.set('localStorageKey2',file);
        
            var value = localStorageService.get('localStorageKey2');
                console.log(value);     
            file.upload.then(function (response) {
                $timeout(function () {
                    file.result = response.data;
                });
            }, function (response) {
                if (response.status > 0)
                    $scope.errorMsg = response.status + ': ' + response.data;
            }, function (evt) {
                file.progress = Math.min(100, parseInt(100.0 * 
                                         evt.loaded / evt.total));
            });
        }   
    }
}]);
    })();