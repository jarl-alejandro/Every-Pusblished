'use strict'

var port = process.env.PORT || 3000
var http = require('http')
var mongoose = require("mongoose")
var App = require('./lib')

var everyPublised = new App({})
var server = http.createServer(everyPublised.app)

mongoose.connect("mongodb://localhost/publicar", onListenDB)

function onListenDB(err){
    if(err)
        return err.message
    else
        console.log("DB connect with exited!!! :)")
}

server.listen(port, function(){
    console.log('App running in http://localhost:' + port)
})
