import express from 'express';
import {cartAdd, cartGet, cartDelete, cartClearAll} from '../Controllers/CartController.js';
const router = express.Router();
router.post("/cartAdd", cartAdd)
router.get('/getCart', cartGet);
router.delete('/deleteCart/:id', cartDelete);
router.delete('/clearAll', cartClearAll);
export default router;