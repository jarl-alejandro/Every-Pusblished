'use strict'

var express = require('express')
var jade = require('jade')
var cors = require('cors')
var path = require('path')
var bodyParser = require('body-parser')
var Router = require('./router')

module.exports = function(config){
    config = config || {}

    this.app = express()
    this.app.use(cors())

    this.app.set('views', path.join(__dirname, '..', 'views'))
    this.app.set('view engine', 'jade')

    this.app.use(express.static( path.join(__dirname, '..', 'static' ) ))
    this.app.use(bodyParser.json())

    new Router(this.app)
}
