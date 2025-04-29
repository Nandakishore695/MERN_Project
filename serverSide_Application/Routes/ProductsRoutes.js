import express from "express";
import { deleteProduct, getProduct, getProductById, product, updateProduct, searchProduct } from "../Controllers/ProductsController.js";
import { Authenticate } from "../Middlewares/Auth.js";

const router = express.Router();
router.post("/add", product);
router.get("/all", getProduct);
router.get("/:id", getProductById);
router.put("/update_product/:id", updateProduct);
router.delete("/delete_product/:id", deleteProduct);
router.get("/searchProduct/:item", searchProduct)
export default router;