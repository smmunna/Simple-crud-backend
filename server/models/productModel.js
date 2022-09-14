const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:String,
    price:String,
    category:String,
    company:String,
    userId:String,
});

const Product = mongoose.model("Product",productSchema);
module.exports = Product;
