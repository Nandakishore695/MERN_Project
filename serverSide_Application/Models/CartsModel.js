import mongoose from "mongoose";


const cartItemSchema = new mongoose.Schema({
    porductId: { type: mongoose.Schema.Types.ObjectId, ref: "ProductModel", require: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
})


const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "RegisterModel", require: true },
    item: [cartItemSchema]
});
export const Cart = mongoose.model("Cart", cartSchema);

//now correct main issue is insdie item array not getting value or object
