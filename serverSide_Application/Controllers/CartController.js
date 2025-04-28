import { Cart } from "../Models/CartsModel.js";

export const cartAdd = async (req, res) => {
  const { productId, name, description, price, quantity, image } = req.body;
  const userId = "67f0fd1e5b97da013aa168ee";
  try {
    let isUser = await Cart.findOne({ userId });
    if (!isUser) {
      isUser = await Cart.create({
        userId,
        items: [{ productId, name, description, price, quantity, image }],
      });
    } 
    const isExistingProduct = isUser.items.find(item => String(item.productId) === productId);    
    if (isExistingProduct) {
      isExistingProduct.quantity += 1;
      isExistingProduct.price += price;
    }else{
      isUser.items.push({ productId, name, description, price, quantity, image });
    }
    await isUser.save();
    res.json({ message: "Card Added", success: true });
  } catch (error) {
    res.json({ message: error.message, success: false });
  }
};

export const cartGet = async (req, res) => {
  const userId = "67f0fd1e5b97da013aa168ee";
  try {
    const response = await Cart.findOne({ userId });
    if (!response) {
      return res.json({ message: "No Cart Found", success: false });
    }
    res.json({ message: "All", success: true, response });
  } catch (error) {
    res.json({ message: error.message, success: false });
  }
};

export const cartDelete = async (req, res) => {
  const productId = req.params.id;
  const userId = "67f0fd1e5b97da013aa168ee";
  try {
    let isUer = await Cart.findOne({ userId });
    isUer.items = isUer.items.filter(
      (index) => String(index.productId) !== productId
    );
    await isUer.save();
    res.json({ message: "A Product Remove from cart!", success: true });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const cartClearAll = async (req, res) => {
  try {
    const userId = "67f0fd1e5b97da013aa168ee";
    let cart = await Cart.findOne({ userId });
    console.log(cart);

    cart.items = [];
    await cart.save();

    res.json({ message: "Cart is Clear", success: true });
  } catch (error) {
    res.json({ message: error.message, success: false });
  }
};
