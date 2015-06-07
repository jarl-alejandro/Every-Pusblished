(function(){

  'use strict'

  var app = angular.module("EveryPublished",
    ["ngResource", "ui.router", 'ngMessages', 'mgcrea.ngStrap', "satellizer", "ngAnimate"])

  app.config(function($stateProvider, $authProvider, $httpProvider, $urlRouterProvider){

    $stateProvider
    .state("index",{
      url: "/",
      controller: "homeCrtl",
      templateUrl: "templates/home.html",
      resolve: {
        authenticated: function($q, $location, $auth){
          var deferred = $q.defer()

          if(!$auth.isAuthenticated()){
            $location.path("/login")
          }
          else
            deferred.resolve()

          return deferred.promise
        }
      }
    })
    .state("signup",{
        url: "/signup",
        controller:"signupCtrl",
        templateUrl: "templates/signup.html"
    })
    .state("signup.signupOne",{
      url: "/1",
      templateUrl:"templates/signup-upload-1.html",
      controller: "signupOneCtrl"
    })
    .state("signup.signupTwo",{
      url: "/2",
      templateUrl:"templates/signup-upload-2.html",
      controller: "signupTwoCtrl"
    })

    .state("signup.signupThree",{
      url: "/3",
      templateUrl:"templates/signup-upload-3.html"
    })

    .state("login",{
      url: "/login",
      controller: "loginCtrl",
      templateUrl: "templates/login.html"
    })
    .state("logout", {
      url: "/logout",
      controller: "logoutCtrl",
      templateUrl: null
    })
    .state("published",{
      url:"/published/:id",
      templateUrl: "templates/pubDetail.html",
      controller: "publishedCtrl"
    })
    .state("new",{
      url: "/new",
      controller: "newPublishedCtrl",
      templateUrl: "templates/new.html",
      resolve: {
        authenticated: function($q, $location, $auth){
          var deferred = $q.defer()

          if(!$auth.isAuthenticated()){
            $location.path("/login")
          }
          else
            deferred.resolve()

          return deferred.promise
        }
      }
    })
    .state("new.newOne",{
      url: "/upload/1",
      templateUrl:"templates/new-upload-1.html",
      controller: "newOneCtrl"
    })
    .state("new.newTwo",{
      url: "/upload/2",
      templateUrl:"templates/new-upload-2.html"
    })

    $urlRouterProvider.otherwise('/')

    $httpProvider.defaults.transformRequest = function(data){
      if(undefined === data)
        return data
      var formData = new FormData()

      angular.forEach(data, function(value, key){
        if(value instanceof FileList){

          if(value.length === 1)
            formData.append(key, value[0])

          else{
            angular.forEach(value, function(file, index){
              formData.append(key + '_' + index, file)
            })

          }
        }
        else
          formData.append(key, value)
      })
      return formData
    }

    $httpProvider.defaults.headers.post['Content-Type'] = undefined;

  })

})()
