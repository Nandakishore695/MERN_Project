import { Cart } from "../Models/CartsModel.js";

export const cartAdd = async (req, res) => {
    const { name, description, price, image } = req.body;
    try {
        await Cart.create({ name, description, price, image });
        res.json({ message: "A New Product Saved!" })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const cartGet = async (req, res) => {
    try {
        const response = await Cart.find();
        res.json(response)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const cartDelete = async (req, res) =>{
    const { id } = req.params;
    try {
        await Cart.findByIdAndDelete(id);
        res.json({message: "A Product Remove!", success: true})
    }
    catch (error) {
        res.json({ message: error.message })
    }
}  

export const cartClearAll = async (req, res) => {

}