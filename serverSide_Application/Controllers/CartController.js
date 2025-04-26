import { Cart } from "../Models/CartsModel.js";

export const cartAdd = async (req, res) => {
  const {productId,name,description,price,quantity,image} = req.body;
  const userId = "67f0fd1e5b97da013aa168ee";
  try {
    let isUser = await Cart.findOne({ userId });
    if (!isUser) {
        isUser = await Cart.create({userId, items: [{ productId, name, description, price, quantity, image }],});
    }
    isUser.items.push({ productId, name, description, price, quantity, image });
    await isUser.save();   
    res.json({ message: "Card Added", success: true });
  } catch (error) {
    res.json({ message: error.message, success: false });
  }
};


export const cartGet = async (req, res) => {
  const userId = "67f0fd1e5b97da013aa168ee";
  try {
    const response = await Cart.findOne({userId});

    if(!response) {
        return res.json({ message: "No Cart Found", success: false });
    }
    res.json({message: "All", success: true, response });
  } catch (error) {
    res.json({ message: error.message, success: false });
  }
};

export const cartDelete = async (req, res) => {
  const { id } = req.params;
  const userId = "67f0fd1e5b97da013aa168ee";
  try {
    let isUer = await Cart.findOne({userId});
    isUer.items = isUer.items.filter((index) => index.productId !== id);
    console.log(isUer);

    
    await isUer.save();
    res.json({ message: "A Product Remove!", success: true });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const cartClearAll = async (req, res) => {
  try {
    const userId = "67f0fd1e5b97da013aa168ee";
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = await Cart.create({ items: [] });
    } else {
      cart.items = [];
    }
    res.json({ message: "Cart is Clear", success: true, response });
  } catch (error) {
    res.json({ message: error.message, success: false });
  }
};
