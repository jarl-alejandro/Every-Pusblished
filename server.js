'use strict'

var port = process.env.PORT || 3000
var http = require('http')
var App = require('./lib')

var everyPublised = new App({})
var server = http.createServer(everyPublised.app)

server.listen(port, function(){
    console.log('App running in http://localhost:'+port)
})
