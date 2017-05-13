<!doctype html>
<html lang="en" ng-app="myApp" ng-cloak>
<head>
  <meta charset="UTF-8">
  <title>Angular Registration</title>
  <meta name="viewport" content="width=device-width, user-scalable=no">
  <link href='https://fonts.googleapis.com/css?family=Lato:400,100,700,900' rel='stylesheet' type='text/css'>
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
 
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
  

  <script src="js/lib/angular/angular.min.js"></script>
  <script src="js/lib/angular/angular-route.min.js"></script>
  <script src="js/lib/angular/angular-animate.min.js"></script>

 
  
  
  <script src="js/app.js"></script>
 
  <script src="js/controllers/registration.js"></script>
  <script src="js/controllers/success.js"></script>
  <script src="js/controllers/message.js"></script>
  <script src="js/factory/authenticate.js"></script>
  <script src="js/customdirective/messagedirective.js"></script>

</head>
<body>
<header>
  <nav class="cf" ng-include="'views/nav.html'"></nav>
</header>
<div class="page">
    
  <div class="userinfo" ng-hide="isnotloggedin" ng-controller="RegistrationController">
      <span class="userinfo">Hi {{suser.name}}  </span>
    
  </div>

  <main class="cf" ng-view>
     
  </main>
</div>
    
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</body>
</html>
