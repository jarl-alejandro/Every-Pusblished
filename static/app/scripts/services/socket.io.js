(function(){
  'use strict'

  var app = angular.module("EveryPublished")

  app.factory("socket", function(){
    var socket = io()
    return socket
  })

})()
