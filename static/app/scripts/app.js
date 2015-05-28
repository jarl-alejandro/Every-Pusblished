(function(){

  var angular = require("angular")
  var ngResource = require("angular-resource")
  var ngRoute = require("angular-route")

  var app = angular.module("EveryPublished", [ngResource, ngRoute])

  app.controller("home", ["$scope",function($scope){
    $scope.lol = "Alejandro Rivas";
  }])

  app.config(["$routeProvider",function($routeProvider){
      $routeProvider
        .when("/", {
            controller: "home",
            templateUrl: "templates/home.html"
        })
  }])


})()
