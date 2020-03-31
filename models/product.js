//importing all the necessary files
const mongoose=require('mongoose');

// Creating Schema for products
const productSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
},{
    timestamps: true
});

const product=mongoose.model('product',productSchema);
module.exports=product;
