'use strict'

var User = require('./model')
var service = require('../helpers/service')
var cloudinary = require('cloudinary')

var uuid = require('uuid')
var fs = require('fs')
var path = require('path')
var os = require('os')
var dataURIBuffer = require('data-uri-to-buffer')
var EventEmitter = require('events').EventEmitter

exports.emailSignup = function(req, res){


    User.findOne({ email:req.body.email }, function(err, existingUser){

        if(existingUser){
            return res.status(409).send({ message:"Usuario existe" })
        }

        var user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            direction: req.body.direction,
            about: req.body.about,
            phone: req.body.phone
        })

        cloudinary.uploader.upload(req.files.avatar.path, function(result){
          console.log("cloudinary -->", result)

          user.avatar = result.url

          user.save(function(){
              res.send({ token:service.createJWT(user) })
          })

        })
    })
}

exports.emailLogin = function(req, res){
    User.findOne({ email:req.body.email }, '+password', function(err, user){

        if(!user){
            return res.status(401).send({ message:"Wrong email" })
        }

        user.comparePassword(req.body.password, function(err, isMatch){
            if(!isMatch){
                return res.status(401).send({ message:"Wrong email or password" })
            }

            res.send({ token:service.createJWT(user) })
        })

    })
}

exports.meUser = function(req, res){
    User.findById(req.user).exec()
        .then(function(user){
            res.send(user)
        }, function(err){
            return err.message
        })
}


