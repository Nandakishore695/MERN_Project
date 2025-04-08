import { Product } from "../Models/ProductsModel.js";

export const product = async (req, res) => {
    const { name, description, price, image } = req.body;
    try {
        await Product.create({ name, description, price, image });
        res.json({ message: "A New Product Saved!" })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getProduct = async (req, res) => {
    try {
        const response = await Product.find();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

export const getProductById = async (req, res) => {
    const { id } = req.params;   
    try {
        const response = await Product.findById(id);
        res.json(response)
    } catch (error) {console.log(error);}

}