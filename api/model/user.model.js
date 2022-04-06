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
        unique:true,
        required:true
    },
    image:{
        type:String
    },
    mobile:{
        type:String,
        required:true
    },
    isAdmin:{
        type:boolean,
        required:true,
        default:false
    },
    whishlist:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'products'
    }]
},
{
    timestamps:true
}
)

module.exports = mongoose.model('users',userSchema);