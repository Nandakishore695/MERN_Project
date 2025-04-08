import express from "express";
import { getProduct, getProductById, product } from "../Controllers/ProductsController.js";
const router = express.Router();

router.post("/add", product);
router.get("/all", getProduct);
router.get("/:id", getProductById);
export default router;