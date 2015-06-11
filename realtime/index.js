'use strict'

var IO = require('socket.io')
var Comments = require('../lib/comment/model')

module.exports = function(config){
  config = config || {}
  var io = IO.listen(config.server)

  io.on('connection', function(socket){
    socket.on("send::comment", function(data){

      var comment = new Comments({
        comment: data.comment,
        user: data.user.id,
        publish: data.publish.id,
      })

      comment.save(function(err){
        if(err)
          return err.message
        else
          socket.emit("get::comment", data)
      })

    })
  })

}
