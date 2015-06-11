var mongoose = require('mongoose')
var Schema = mongoose.Schema

var CommentSchema = new Schema({
  comment: String,
  user : { type:Schema.ObjectId, ref:"User" },
  publish : { type:Schema.ObjectId, ref:"Publish" }

})

CommentSchema.set('toJSON', {
    transform: function(doc, ret, options){
        ret.id = ret._id
        delete ret._id
        delete ret.__v
    }
})

var Comment = mongoose.model('Comment', CommentSchema)
module.exports = Comment
