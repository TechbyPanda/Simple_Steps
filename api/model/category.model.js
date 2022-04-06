const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    color:[{
        type:String,
        required:true
    }],
    occassion:[{
        type:String,
        required:true
    }],
    gender:[{
        type:String,
        required:true
    }],
    size:[{
        type:String,
        required:true
    }],
    discount:[{
        type:number,
        required:true
    }]
});

module.exports = mongoose.model('categories',categorySchema);