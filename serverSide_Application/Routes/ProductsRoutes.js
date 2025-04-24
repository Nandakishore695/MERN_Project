import express from "express";
import { deleteProduct, getProduct, getProductById, product, updateProduct } from "../Controllers/ProductsController.js";
import { Authenticate } from "../Middlewares/Auth.js";

const router = express.Router();
router.post("/add", Authenticate, product);
router.get("/all", getProduct);
router.get("/:id", getProductById);
router.put("/update_product/:id", updateProduct)
router.delete("/delete_product/:id", deleteProduct)
export default router;