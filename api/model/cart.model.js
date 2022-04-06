const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    userId:{
        type: Schema.Types.ObjectId,
        required:true
    },
    productlists:[{
        productId:{
            type: Schema.Types.ObjectId,
            required:true,
            ref: "products"
        },
        quantity:{
            type:number,
            required:true
        }
    }]
});

module.exports = mongoose.model('carts',cartSchema);