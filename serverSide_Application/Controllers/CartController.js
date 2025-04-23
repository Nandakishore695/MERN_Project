import { Cart } from "../Models/CartsModel.js";


export const cartAdd = async (req, res) => {
    const { productId, name, description, price, quantity = 1, image } = req.body;    
    try {
        const userId = "67f0fd1e5b97da013aa168ee";
        const response = await Cart.create({userId, items:[{productId, name, description, price, quantity, image}]});        
        res.json({message: "Cart Added", success: true, response});        
    } catch (error) {
        res.json({message: error.message, success: false})
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
    }
    catch (error) {
        res.json({ message: error.message });
    }
}

export const cartClearAll = async (req, res) => {
    try {
        const userId = "67f0fd1e5b97da013aa168ee";
        let cart = await Cart.findOne({userId});
        if(!cart){
            cart = await Cart.create({items:[]})
        }
        else{
            cart.items = []
        }
        res.json({ message: "Cart is Clear", success: true, response });
    } catch (error) {
        res.json({ message: error.message, success: false });
    }
}


//export const addToCart = async (req, res) => {
    // try {
    //     const { productId, title, price, qty, imageSrc } = req.body;
    //     const userId = req.user._id;
    
    //     let cart = await Cart.findOne({ userId });
    
    //     if (!cart) {
    //       cart = new Cart({ userId, items: [] });
    //     }
    
    //     const itemIndex = cart.items.findIndex(
    //       (item) => item.productId.toString() === productId
    //     );
    
    //     if (itemIndex > -1) {
    //       cart.items[itemIndex].qty += Number(qty);
    //     } else {
    //       cart.items.push({ productId, title, price, qty: Number(qty), imageSrc });
    //     }
    
    //     await cart.save()
    //     res.status(200).json({ message: "Item added to cart", cart });
    //   } catch (error) {
    //     res.status(500).json({ message: "Server error", error: error.message });
    //   }
    // };
    