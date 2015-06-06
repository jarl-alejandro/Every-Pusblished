(function(){
  'use strict'

  var app = angular.module("EveryPublished")

  app.controller("newPublishedCtrl", function($scope, $alert, $location, Account, PublishedResource){

    $scope.formData = {}

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
      console.log("nombre ", $scope.formData.name)
      PublishedResource.save({
        "name" : $scope.formData.name,
        "price" :  $scope.formData.price,
        "photo" :  $scope.formData.photo,
        "description" :  $scope.formData.description
      }, function(data){
        $location.path("/")
      })
    }

  })

  app.controller("publishedCtrl", function($scope, $stateParams, PublishedResource){
    $scope.published = PublishedResource.get({ id:$stateParams.id })
  })

})()

