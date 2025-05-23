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

export const getUserAddress = async (req, res) => {
    try {
        const response = await ShippingAddress.find();
        res.json({ message: "old userAddress", success: true, response })
    } catch (error) {
        res.json({ message: error.message, success: false })
    }
}