(function(){
  'use strict'

  var app = angular.module("EveryPublished")

  app.controller("newPublishedCtrl", function($scope, $alert, $location, Account, PublishedResource){

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

    $scope.newPublish = function(){
      console.log("foto >>", $scope.photo)
      PublishedResource.save({
        "name" : $scope.name,
        "price" :  $scope.price,
        "photo" :  $scope.photo,
        "description" :  $scope.description
      }, function(data){
        console.log(data)
        $location.path("/")
      })
    }

  })

})()
