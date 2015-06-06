(function(){
  'use strict'

  var app = angular.module("EveryPublished")

  app.controller("newOneCtrl", function($scope, $state){

    var nextState = function(currentState){
      switch (currentState) {
        case 'new.newOne':
            return 'new.newTwo'
            break;
        default:
            alert('No se han encontrado interruptor');
      }
    }

    $scope.goToNextSection = function(isFormValid){
      if(isFormValid){
        $state.go(nextState($state.current.name));
      }
    }

  })

  app.controller("signupOneCtrl", function($scope, $state){

    var nextState = function(currentState){
      switch (currentState) {
        case 'signup.signupOne':
            return 'signup.signupTwo'
            break;
        default:
            alert('No se han encontrado interruptor');
      }
    }

    $scope.goToNextSection = function(isFormValid){
      if(isFormValid){
        $state.go(nextState($state.current.name));
      }
    }

  })

})()
