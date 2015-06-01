(function(){
    'use strict'

    var app = angular.module("EveryPublished")

    app.controller("homeCrtl", function($scope, $alert, Account, PublishedResource){

      $scope.getProfile = function(){
        Account.getProfile()
          .success(function(data){
            $scope.user = data
          })
          .error(function(err){
            $alert({
              content: "Hay un error con la data " + err.message,
              animation: "fadeZoomFadeDown",
              type: "material",
              duraction: 3
            })
          })
      }

      $scope.getProfile()
      $scope.publishes = PublishedResource.query()
    })

})()
