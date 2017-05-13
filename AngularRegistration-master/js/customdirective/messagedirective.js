myApp.directive('messageDirective', function ($compile) {
    return{
        /*template:'<div style ="color:red">hello</div>'*/
        templateUrl: 'views/messagelist.html',
        restrict: 'ECA',
      



    };
});