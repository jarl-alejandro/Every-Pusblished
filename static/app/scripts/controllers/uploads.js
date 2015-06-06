(function(){
  'use strict'

  var app = angular.module("EveryPublished")

  app.controller("newOneCtrl", function($scope, $state){

    var nextState = function(currentState){
      console.log("currentState >> ", currentState)
      switch (currentState) {
        case 'new.newOne':
            return 'new.newTwo'
            break;
        default:
            alert('No se han encontrado interruptor');
      }
    }
    console.log("name ", $scope.name)

    $scope.goToNextSection = function(isFormValid){
      if(isFormValid){
        $state.go(nextState($state.current.name));
      }
    }

  })

  app.controller("newTwoCtrl", function($scope){
    console.log("description", $scope.description)
    console.log("datos 1", $scope.name, $scope.photo)
    console.log("datos 2", $scope.description, $scope.price)
  })

})()
