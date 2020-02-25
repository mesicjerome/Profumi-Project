const mongoose = require('mongoose');




const productSchema = mongoose.Schema({
    images: {
        type: Array,
        default: []
    },
    creator: {
        type: String,
    },
    name: {
        type: String,
    },
    families: {
        type: Number,
        default: 1
    },
    notes: {
        type: String,
    },
    description: {
        type: String,
    },
    size: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        default: 0
    },
    sold: {
        type: Number,
        maxlength: 100,
        default: 0
    },
    views: {
        type: Number,
        default: 0
    }
    }, {timestamps: true})

    productSchema.index({ 
        creator: 'text',
        name:'text',
    }, {
        weights: {
            creator: 5,
            name: 1,
        }
    })

const Product = mongoose.model('Product', productSchema);

module.exports = { Product }