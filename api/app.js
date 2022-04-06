const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    }
},
{ 
    timestamps: true
});

module.exports = mongoose.model('users',userSchema);