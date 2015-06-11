(function(){
  'use strict'

  var app = angular.module("EveryPublished")

  app.factory("PublishedResource",function($resource){
    return $resource('/api/published/:id', { id:"@id" }, { update:{ method:"PUT" } })
  })


})()
