import express from 'express';
import { getUserAddress, shippingAddressAdd } from '../Controllers/ShippingAddressController.js';
const router = express.Router();

router.post('/add', shippingAddressAdd);
router.get('/address', getUserAddress);

export default router;