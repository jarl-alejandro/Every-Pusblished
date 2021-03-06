'use strict'

var Publish = require('./model')
var cloudinary = require('cloudinary')
var fs = require('fs')
var path = require('path')

exports.findPublishAll = function(req, res){
  Publish.find({}).populate('user').exec()
    .then(function(publishes){
      var publishesFixed = publishes.map(function(publish){
        return publish.toJSON()
      })
      res
        .status(200)
        .set('Content-Type', 'application/json')
        .json(publishesFixed)
    }, function(err){
      return err.message
    })
}

exports.findPublishOne = function(req, res, next){

  var id = req.params.id

  if(!id){
    return next()
  }

  Publish.findById(id).populate('user').exec()
    .then(function(publish){
      res
        .status(200)
        .set('Content-Type', 'application/json')
        .json(publish)

    }, function(err){
      return err.message
    })
}

exports.createNewPublish = function(req, res){

  var publish = new Publish({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    category: req.body.category,
    user: req.user
  })

  cloudinary.uploader.upload(req.files.photo.path, function(result){
    publish.photo = result.url
    console.log("cloudinary >> ", result)

    publish.save(function(err, publish){
      if(err)
        return err.message

      res
        .status(201)
        .send(publish)
    })
  })


}
