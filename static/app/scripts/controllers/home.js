(function(){
    'use strict'

    var app = angular.module("EveryPublished")

    app.controller("homeCrtl", function($scope, Account){

      $scope.getProfile = function(){
        Account.getProfile()
          .success(function(data){
            $scope.user = data
          })
          .error(function(err){
            alert("esto es un error de home " + err)
          })
      }

      $scope.getProfile()
    })

})()
