(function(){

    'use strict'

    var app = angular.module("EveryPublished", ["ngResource", "ui.router", "satellizer"])

    app.config(function($stateProvider, $authProvider){
        $stateProvider
        .state("inicio", {
            url: "/",
            controller: "homeCrtl",
            templateUrl: "templates/home.html"
        })
        .state("signup",{
            url: "/signup",
            controller:"signupCtrl",
            templateUrl: "templates/signup.html"
        })
        .state("login",{
          url: "/login",
          controller: "loginCtrl",
          templateUrl: "templates/login.html"
        })
        .state("/logout", {
          url: "/logout",
          controller: "logoutCtrl",
          templateUrl: null
        })

    })

})()
