(function(){
    'use strict'

    var app = angular.module("EveryPublished")

    app.controller("signupCtrl", function($scope, $auth, $location){
        $scope.signup = function(){

          $auth.signup({
            name: $scope.name,
            email: $scope.email,
            password: $scope.password,
            direction: $scope.direction,
            about: $scope.about

          })
          .then(function(){
            $location.path("/")
            console.log("save")
          })
          .catch(function(response){
            console.log(response)
          })

        }
    })

  app.controller("loginCtrl", function($scope, $auth, $location){

    $scope.login = function(){

      $auth.login({
        email:$scope.email,
        password:$scope.password
      })
      .then(function(){
        $location.path("/")
      })
      .catch(function(res){
        console.log(res)
      })

    }
  })


  app.controller("logoutCtrl", function($auth){
    if(!$auth.isAuthenticated()){
      return;
    }

    $auth.logout()
      .then(function(){
        alert("salir")
      })
  })

})()
