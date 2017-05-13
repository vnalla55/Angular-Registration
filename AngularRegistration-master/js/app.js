var myApp = angular.module('myApp',
        ['ngRoute']);



myApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
                when('/login', {
                    templateUrl: 'views/login.html',
                    controller: 'RegistrationController'
                }).
                when('/register', {
                    templateUrl: 'views/register.html',
                    controller: 'RegistrationController'
                }).when('/message', {
                    templateUrl: 'views/message.html',
                    controller: 'SuccessController',
                }).when('/message/:id', {
                    templateUrl: 'views/messageview.html',
                    controller: 'MessageController'
                }).
                when('/success', {
                    templateUrl: 'views/success.html',
                    controller: 'SuccessController',
                }). when('/profile', {
                    templateUrl: 'views/profile.html',
                    controller: 'SuccessController',
                }).
                otherwise({
                    redirectTo: '/login'
                });
    }]).run(function ($rootScope, $location, Data) {
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        $rootScope.authenticated = false;
        $rootScope.isnotloggedin = true;
        var nextUrl = next.templateUrl;
        Data.getSession().then(function (results) {
            if (results[0].id) {

                $rootScope.isnotloggedin = false;
                $rootScope.authenticated = true;
               
                $rootScope.suser=results[0];


                if (nextUrl == 'views/register.html' || nextUrl == 'views/login.html') {
                    $location.path("/success");
                }else if(nextUrl=='views/message.html')
                {
                     Data.getMessage().then(function (results) {
                         $rootScope.messages=results;
                         
                     });
                }
            }//session exists
            else {


                if (nextUrl == 'views/register.html' || nextUrl == 'views/login.html') {

                } else {
                    $location.path("/login");
                }
            }//session doesnot exists
        });


    });
});