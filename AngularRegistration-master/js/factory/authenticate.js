myApp.factory("Data", ['$http', '$q','$rootScope',
    function ($http, $q,$rootScope) {

        return {
            'validataCredential': function (user) {

                var qOjbect = $q.defer();

                var userdata = {email: user.email, password: user.password, task: 'validate'};
                $http({
                    method: 'POST',
                    url: 'test.php',
                    data: userdata,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(function (success) {
                    qOjbect.resolve(success.data);

                }, function (err) {
                    console.log(err);
                });
                return qOjbect.promise;


            },
            'registerUser': function (user) {

                var qOjbect = $q.defer();
                var userdata = {name: user.name, email: user.email, password: user.password, username: user.username, location: user.location, phone: user.phone, task: 'register'};
                $http({
                    method: 'POST',
                    url: 'test.php',
                    data: userdata,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(function (success) {
                    qOjbect.resolve(success.data);
                   

                }, function (err) {
                    console.log(err);
                });
                return qOjbect.promise;


            },
            'updateUserInfo': function () {

                var qOjbect = $q.defer();
                var userdata = {name: $rootScope.suser.name, email: $rootScope.suser.email, password: $rootScope.suser.password, username: $rootScope.suser.username, location: $rootScope.suser.location, contact_no: $rootScope.suser.contact_no, task: 'updateuser'};
                $http({
                    method: 'POST',
                    url: 'test.php',
                    data: userdata,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(function (success) {
                    qOjbect.resolve(success.data);
                    
                }, function (err) {
                    console.log(err);
                });
                return qOjbect.promise;


            },'logout': function (user) {

                var qOjbect = $q.defer();
                var userdata = { task: 'logout'};
                $http({
                    method: 'POST',
                    url: 'test.php',
                    data: userdata,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(function (success) {
                    console.log(success);
                    qOjbect.resolve(success.data);
                   

                }, function (err) {
                    console.log(err);
                });
                return qOjbect.promise;


            },'getSession': function () {

                var qOjbect = $q.defer();
                var userdata = { task: 'getsessiondata'};
                $http({
                    method: 'POST',
                    url: 'test.php',
                    data: userdata,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(function (success) {
                    qOjbect.resolve(success.data);
                   

                }, function (err) {
                    console.log(err);
                });
                return qOjbect.promise;


            },'getMessage': function () {

                var qOjbect = $q.defer();
                var userdata = { task: 'getmessage' , id:$rootScope.suser.id};
                $http({
                    method: 'POST',
                    url: 'test.php',
                    data: userdata,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(function (success) {
                    //console.log(success.data[0].Sender);
                    qOjbect.resolve(success.data);
                   

                }, function (err) {
                    console.log(err);
                });
                return qOjbect.promise;


            },'markImportantOrUnimportant': function (id,flag) {
                    console.log('id:'+id+'flag :'+flag);
                var qOjbect = $q.defer();
                
                var userdata = { task: 'updateimportance',flag:flag, id:id};
                $http({
                    method: 'POST',
                    url: 'test.php',
                    data: userdata,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(function (success) {
                    //console.log(success.data[0].Sender);
                    qOjbect.resolve(success.data);
                   

                }, function (err) {
                    console.log(err);
                });
                return qOjbect.promise;


            },
            'deleteMessage': function (id) {
                    
                var qOjbect = $q.defer();
                
                var userdata = { task: 'deletemessage', id:id};
                $http({
                    method: 'POST',
                    url: 'test.php',
                    data: userdata,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(function (success) {
                    //console.log(success.data[0].Sender);
                    qOjbect.resolve(success.data);
                   

                }, function (err) {
                    console.log(err);
                });
                return qOjbect.promise;


            },
             'getSingleMessage': function (id, userid) {
                    
                var qOjbect = $q.defer();
                
                var userdata = { task: 'getsinglemessage', id:id, userid:userid};
                $http({
                    method: 'POST',
                    url: 'test.php',
                    data: userdata,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(function (success) {
                    //console.log(success.data[0].Sender);
                    qOjbect.resolve(success.data);
                   

                }, function (err) {
                    console.log(err);
                });
                return qOjbect.promise;


            },
           
        };







    }]);