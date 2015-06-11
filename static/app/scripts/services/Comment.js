(function(){
  'use strict'

  var app = angular.module("EveryPublished")

  app.factory("Comment", function($resource){
    return $resource('/api/comments/:id', { id:"@id" }, { update:{ method:"PUT" } })
  })


})()
