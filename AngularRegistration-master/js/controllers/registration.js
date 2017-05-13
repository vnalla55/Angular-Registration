myApp.controller('RegistrationController',
        ['$scope', '$http', '$location', 'Data', '$rootScope',
            function ($scope, $http, $location, Data, $rootScope) {

                $scope.login = function () {
                    Data.validataCredential($scope.user).then(function (status) {
                      
                        if (status == 'success')
                        {
                            $rootScope.currentUser = $scope.user;
                            
                            $location.path('/success');
                        } else {
                            $rootScope.currentUser = '';
                            $scope.invalidmessage = 'validation failed';
                        }


                    }, function (err) {
                        //document.write(err);
                        $scope.invalidmessage = err;
                    });


                };
                $scope.register = function () {

                    Data.registerUser($scope.user).then(function (status) {
                       
                        if (status == 'success')
                        {
                           
                            $location.path('/success');
                        } else {
                            $rootScope.currentUser = '';
                            $scope.invalidmessage = status;
                        }


                    }, function (err) {
                        //document.write(err);
                        $scope.invalidmessage = err;
                    });
                };
               
                $scope.logout = function () {
                    Data.logout().then(function (status) {
                        console.log('from logout'+status);
                       
                        if (status == 'success')
                        {
                           
                            $location.path('/login');
                        } else {
                            $scope.invalidmessage = 'log out failed';
                        }


                    }, function (err) {
                        //document.write(err);
                        $scope.invalidmessage = err;
                    });


                };

            }]); //Controller