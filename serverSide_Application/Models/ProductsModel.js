import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    createDate: { type: Date, default: Date.now},
});
export const Product = mongoose.model("Product", productsSchema);