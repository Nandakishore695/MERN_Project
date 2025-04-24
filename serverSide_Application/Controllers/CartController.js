import { Cart } from "../Models/CartsModel.js";

export const cartAdd = async (req, res) => {
    const { productId, name, description, price, quantity = 1, image } = req.body;
    try {
        const userId = "67f0fd1e5b97da013aa168ee";
        const response = await Cart.create({ userId, items: [{ productId, name, description, price, quantity, image }] });
        res.json({ message: "Cart Added", success: true, response });
    } catch (error) {
        res.json({ message: error.message, success: false })
    }
}

export const cartGet = async (req, res) => {
    try {
        const response = await Cart.find();
        res.json(response);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const cartDelete = async (req, res) => {
    const { id } = req.params;
    try {
        await Cart.findByIdAndDelete(id);
        res.json({ message: "A Product Remove!", success: true });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const cartClearAll = async (req, res) => {
    try {
        const userId = "67f0fd1e5b97da013aa168ee";
        let cart = await Cart.findOne({ userId });
        if (!cart) {
            cart = await Cart.create({ items: [] })
        } else {
            cart.items = []
        }
        res.json({ message: "Cart is Clear", success: true, response });
    } catch (error) {
        res.json({ message: error.message, success: false });
    }
}
