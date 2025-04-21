import express from 'express';
import {cartAdd, cartGet, cartDelete, cartClearAll} from '../Controllers/CartController.js';
const router = express.Router();
router.post('/add', cartAdd);
router.get('/getCart', cartGet);
router.delete('/deleteCart/:id', cartDelete);
router.delete('/ClearAll', cartClearAll);
export default router;