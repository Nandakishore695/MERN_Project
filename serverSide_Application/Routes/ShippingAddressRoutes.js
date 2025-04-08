import express from 'express';
import { shippingAddressAdd } from '../Controllers/ShippingAddressController.js';
const router = express.Router();

router.post('/add', shippingAddressAdd);

export default router;