/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


myApp.controller('MessageController', ['$scope','$rootScope',  'Data', '$routeParams',
    function ($scope,$rootScope,  Data  ,$routeParams) {
        console.log($routeParams.id);
        if($routeParams.id!='undefined')
        {
            var user_id=$rootScope.suser.id;
            Data.getSingleMessage($routeParams.id,user_id).then(function (status) {
                console.log(status);
                if(status.length>0){
                    
                
                $scope.m_title = status[0].message_title;
                $scope.m_body = status[0].message_body;
                $scope.m_sender = status[0].Sender;
                if (status[0].important == 1)
                    $scope.m_importance = 'important';
                else
                    $scope.m_importance = 'unimportant';
                }else 
                {
                $scope.m_title = '';
                $scope.m_body = '';
                $scope.m_sender = ''; 
                 $scope.m_importance = '';
                }
                 


            }, function (err) {
                //document.write(err);
                $scope.invalidmessageformessage = err;
            });
        }//
        
     
    }]);