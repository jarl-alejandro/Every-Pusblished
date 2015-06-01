'use strict'

var express = require('express')
var router = express.Router()
var middleware = require('./helpers/middleware')
var inicio = require('./inicio')
var auth = require('./auth')
var published = require('./publish')

var Router = function(app){

  router.get('/', inicio.index)

  router.get('/api/me', middleware.ensureAuthenticated, auth.meUser)

  router.post('/auth/signup', auth.emailSignup)
  router.post('/auth/login', auth.emailLogin)

  //publish
  router.get('/api/published', published.findPublishAll)
  router.get('/api/published/:id', published.findPublishOne)
  router.post('/api/published', middleware.ensureAuthenticated, published.createNewPublish)

  app.use(router)
}

module.exports = Router
