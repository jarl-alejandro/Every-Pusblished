var Comments = require('./model')

exports.findCommentAll = function(req, res){
  //.populate('user').populate('publish')
  Comments.find({}).exec()
  .then(function(comments){
    var commentsFixed = comments.map(function(comment){
      return comment.toJSON()
    })
    res
      .status(200)
      .set('Content-Type', 'application/json')
      .json(commentsFixed)
  }, function(err){
    return err.message
  })
}

exports.findCommentOne = function(req, res, next){

  var id = req.params.id

  if(!id){
    return next()
  }

  Comments.findById(id).populate('publish').populate('user').exec()
    .then(function(comments){
      res
        .status(200)
        .set('Content-Type', 'application/json')
        .json(comments)

    }, function(err){
      return err.message
    })
}

exports.findCommentPub = function(req, res, next){

  var id = req.params.pubId

  if(!id){
    return next()
  }

  Comments.find({ publish:id }).populate('user').exec()
  .then(function(comment){
    res
      .status(200)
      .set('Content-Type', 'application/json')
      .json(comment)
  }, function(err){
    return err.message
  })

}

