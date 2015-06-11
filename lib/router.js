'use strict'

var express = require('express')
var router = express.Router()
var middleware = require('./helpers/middleware')
var inicio = require('./inicio')
var auth = require('./auth')
var published = require('./publish')
var comment = require('./comment')

var Router = function(app){

  router.get('/', inicio.index)

  router.get('/api/me', middleware.ensureAuthenticated, auth.meUser)

  router.post('/auth/signup', auth.emailSignup)
  router.post('/auth/login', auth.emailLogin)

  //publish
  router.get('/api/published', published.findPublishAll)
  router.get('/api/published/:id', published.findPublishOne)
  router.post('/api/published', middleware.ensureAuthenticated, published.createNewPublish)

  //comments
  router.get('/api/comment', comment.findCommentAll)
  router.get('/api/comment/:id', comment.findCommentOne)
  router.get('/api/comments/:pubId', comment.findCommentPub)

  app.use(router)
}

module.exports = Router
