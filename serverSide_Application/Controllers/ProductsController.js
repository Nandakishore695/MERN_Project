import { Product } from "../Models/ProductsModel.js";

export const product = async (req, res) => {
    const { name, description, price, image } = req.body;
    try {
        await Product.create({ name, description, price, image });
        res.json({ message: "A New Product Saved!", success: true })
    } catch (error) {
        res.json({ message: error.message, success: false })
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
    } catch (error) { console.log(error); }

}

export const updateProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const response = await Product.findByIdAndUpdate(id, req.body);

        res.json({ message: "Product has been updated", success: true, response })
    } catch (error) {
        res.json({ message: error.message, success: false })
    }
}

export const deleteProduct = async (req, res) => {
    const id = req.params.id
    try {
        const response = await Product.findByIdAndDelete(id);
        res.json({ message: "Product Removed from list", success: true, response })
    } catch (error) {
        res.json({ message: error.message, success: false })
    }
}

export const searchProduct = async(req, res) =>{
    const itemSearch = req.params.item;    
    try {
        const response = await Product.find({$or:[{name: {$regex: itemSearch, $options: "i" }}]});
        res.json({ message: "Product Found", success: true, response});
    } catch (error) {
        res.json({ message: error.message, success: false })
    }
}