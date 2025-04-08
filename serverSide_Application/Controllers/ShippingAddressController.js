import { ShippingAddress } from "../Models/ShippingAddress.js";

export const shippingAddressAdd = async (req, res) => {
    const { name, country, state, city, postalCode, phone, address } = req.body;
    try {
        await ShippingAddress.create({ name, country, state, city, postalCode, phone, address });
        res.json({ message: "Shipping Address Added!", success: true });
    }
    catch (error) {
        res.json({ message: error.message, success: false });
    }
}