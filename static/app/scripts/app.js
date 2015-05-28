(function(){

  var angular = require("angular")
  var app = angular.module("EveryPublished", [])


  app.controller("home", ["$scope",function($scope){
    $scope.lol = "Alejandro Rivas";
  }])

})()
