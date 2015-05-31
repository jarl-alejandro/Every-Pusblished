'use strict'


var jwt = require('jwt-simple')
var moment = require('moment')
var config = require('../../config')
var User = require('../auth/model')

exports.ensureAuthenticated = function(req, res, next){
    if(!req.headers.authorization){
        return res.status(401).send({ message:"Please make sure request" })
    }

    var token = req.headers.authorization.split(' ')[1]
    var payload = jwt.decode(token, config.TOKEN_SECRET)

    if(payload.exp <= moment().unic()){
        return res.status(401).send({ message:"Token has expired" })
    }

    User.findById(payload.sub, function(err, user){
        if(!user){
            return res.status(400).send({ message:"User no exites" })
        }

        req.user = user
        next()
    })
}
