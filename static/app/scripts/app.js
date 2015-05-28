(function(){
    'use strict'

    var angular = require("angular")
    var ngResource = require("angular-resource")
    var ngRoute = require("angular-route")
    var homeCrtl = require("./controller/home")

    var app = angular.module("EveryPublished", [ngResource, ngRoute])

    app.config(["$routeProvider",function($routeProvider){
        $routeProvider
        .when("/", {
            controller: "homeCrtl",
            templateUrl: "templates/home.html"
        })
    }])

    app.controller("homeCrtl", ["$scope", homeCrtl.home])

})()
