'use strict'

var bcrypt = require("bcryptjs")
var mongoose = require("mongoose")
var Schema = mongoose.Schema

var UserSchema = new Schema({
    name:String,
    phone: Number,
    email:{ type:String, unique:true, lowercase:true },
    password:{ type:String, select:false },
    avatar: String,
    direction: String,
    about: String
})

UserSchema.set('toJSON', {
    transform: function(doc, ret, options){
        ret.id = ret._id
        delete ret._id
        delete ret.__v
    }
})

UserSchema.pre('save', function(next){
    var user = this;

    if(!user.isModified('password')){
        return next()
    }

    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(user.password, salt, function(err, hash){
            user.password = hash
            next()
        })
    })
})

UserSchema.methods.comparePassword = function(password, done){
    bcrypt.compare(password, this.password, function(err, isMatch){
        done(err, isMatch)
    })
}

var User = mongoose.model("User", UserSchema)
module.exports = User







