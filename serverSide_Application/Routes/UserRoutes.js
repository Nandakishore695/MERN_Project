
import express from 'express';
import { register, login, getUser } from '../Controllers/RegisterController.js';

const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.get("/alluser", getUser)
export default router;