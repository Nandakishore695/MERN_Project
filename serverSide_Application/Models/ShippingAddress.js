import mongoose from "mongoose";

const shippingAddressSchema = new mongoose.Schema({
    name: { type: String, required: true },
    country: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
})
export const ShippingAddress = mongoose.model("ShippingAddress", shippingAddressSchema);