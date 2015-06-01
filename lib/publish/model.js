'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var PublishSchema = new Schema({
  name: String,
  price: Number,
  photo: String,
  description: String,
  user: { type:Schema.ObjectId, ref:"User" }
})


PublishSchema.set('toJSON', {
    transform: function(doc, ret, options){
        ret.id = ret._id
        delete ret._id
        delete ret.__v
    }
})

var Publish = mongoose.model("Publish", PublishSchema)
module.exports = Publish
