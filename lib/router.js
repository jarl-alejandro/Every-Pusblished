'use strict'

var express = require('express')
var router = express.Router()
var index = require('./index/index')

var Router = function(app){

    router.get('/', index.index)

    app.use(router)
}

module.exports = Router
