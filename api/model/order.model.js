const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "users",
        required:true,
    },
    productlist:[{
        productdetails:{
            type:String,
            required:true
        }
    }],
    payment:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required:true
    }
})