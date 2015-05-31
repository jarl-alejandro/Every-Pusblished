(function(){
  'use strict'

  var app = angular.module("EveryPublished")

  app.factory("Account", function($http){
    return{
      getProfile: function(){
        return $http.get("/api/me")
      }
    }
  })

})()
