import mongoose from "mongoose";


const productscema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    sellprice: Number,
    image: String,
    category: String,
    childimage: []
});

export const Product = mongoose.models.Product || mongoose.model("Product", productscema);