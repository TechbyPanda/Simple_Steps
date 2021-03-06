const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    rating:{
        type:number,
        required:true
    },
    comments:{
        type:String,
        required:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"users"
    },
})

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rating:{
        type:number,
        required:true,
        default:0
    },
    size:[{
        type:String,
        required:true
    }],
    description:{
        type:String,
    },
    images:{
        front:{
            type:String,
            required:true
        },
        back:{
            type:String,
        },
        right:{
            type:String,
        },
        left:{
            type:String
        }
    },
    price:{
        type:number,
        required:true
    },
    quantity:{
        type:number,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    color:[{
        type:String,
        required:true
    }],
    reviews:[reviewSchema],
    numReviews:{
        type:number,
        required:true,
        default:0
    },
    occassion:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    discount:{ 
        type:number,
    },
},
{
    timestamps: true
}
)

module.exports = mongoose.model('products',productSchema);