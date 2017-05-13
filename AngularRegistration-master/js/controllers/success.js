myApp.controller('SuccessController', ['$scope', '$http', '$location', 'Data', '$rootScope','$routeParams',
    function ($scope, $http, $location, Data, $rootScope,$routeParams) {
        $scope.message = "Welcome!!!";
        $scope.updateuserinfo = function () {
            Data.updateUserInfo().then(function (status) {
                if (status == 'success')
                {
                    $location.path('/success');
                } else if (status == 'usernameexists') {
                    $scope.invalidmessage = 'User name already exists';
                } else
                {
                    $scope.invalidmessage = 'Update failed';
                }


            }, function (err) {
                //document.write(err);
                $scope.invalidmessage = err;
            });


        };
     
          $scope.deleteMessage = function (id) {
            Data.deleteMessage(id).then(function (status) {
                if (status == 'success')
                {
                    $location.path('/message');
                   }  else
                {
                    $scope.invalidmessage = 'Error';
                }


            }, function (err) {
                //document.write(err);
                $scope.invalidmessage = err;
            });


        };
        $scope.markImportantOrUnimportant = function (id,flag) {
            Data.markImportantOrUnimportant(id,flag).then(function (status) {
                if (status == 'success')
                {
                    
                  $location.path('/message');
                    
                }  else
                {
                    $scope.invalidmessage = 'Error';
                }


            }, function (err) {
                //document.write(err);
                $scope.invalidmessage = err;
            });


        };
        
     
    }]);