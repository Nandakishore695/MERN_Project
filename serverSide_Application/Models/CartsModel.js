import mongoose from "mongoose";

const cartItemSchema = mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",  //must match the model name
        required: true
    },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    image: { type: String, required: true },
});

const cartSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "UserRegister", required: true },
    items: [cartItemSchema]
})
export const Cart = mongoose.model("Cart", cartSchema)
