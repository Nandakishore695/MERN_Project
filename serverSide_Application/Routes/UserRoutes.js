
import express from 'express';
import { register, login } from '../Controllers/RegisterController.js'; 

const router = express.Router();
router.post("/register", register);
router.post("/login", login); // Assuming you have a login function in your controller
export default router;