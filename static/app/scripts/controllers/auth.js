(function(){
    'use strict'

    var app = angular.module("EveryPublished")

    app.controller("signupCtrl", function($scope, $auth, $location, $alert){
        $scope.signup = function(){
          console.log("avatar >>", $scope.avatar)

          $auth.signup({
            name: $scope.name,
            email: $scope.email,
            password: $scope.password,
            direction: $scope.direction,
            about: $scope.about,
            avatar: $scope.avatar

          })
          .then(function(){
            $location.path("/")
          })
          .catch(function(response){
            if(typeof response.data.message === 'object'){
              $alert({
                content: message[0],
                animation: "fadeZoomFadeDown",
                type: "material",
                duration: 3
              })
            }
            else{
              $alert({
                content: response.data.message,
                animation: "fadeZoomFadeDown",
                type: "material",
                duration: 3
              })
            }
          })

        }
    })

  app.controller("loginCtrl", function($scope, $auth, $location,  $alert){

    $scope.login = function(){

      $auth.login({
        email:$scope.email,
        password:$scope.password
      })
      .then(function(){
        $alert({
          content: 'Has iniciado session',
          animation: 'fadeZoomFadeDown',
          type: 'material',
          duration: 3
        })

        $location.path("/")
      })
      .catch(function(res){
        $alert({
          content: "Email o contraseña es incorrecto",
          animation: "fadeZoomFadeDown",
          type: "material",
          duration: 4
        })
      })

    }
  })


  app.controller("logoutCtrl", function($auth, $alert){
    if(!$auth.isAuthenticated()){
      return;
    }

    $auth.logout()
      .then(function(){
        $alert({
          content: 'has salido',
          animation: 'fadeZoomFadeDown',
          type: 'material',
          duration: 3
        })
      })
  })

})()
