import bcrypt from "bcryptjs";
import { UserRegister } from "../Models/RegisterModel.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { name, email, password, re_password } = req.body; //object destructuring
  try {
    const validEmail = await UserRegister.findOne({ email });
    if (validEmail) {
      return res.json({ message: "Email Already Exists!", success: false })
    }
    else {
      const hashPassword = await bcrypt.hash(password, 10);
      await UserRegister.create({ name, email, password: hashPassword, re_password: hashPassword });
      res.json({ message: "Register Successfully!", success: true })
    }

  } catch (error) {
    res.json({ message: error.message, success: false });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userValid = await UserRegister.findOne({ email });
    if (!userValid) {
      return res.json({ message: "Email Not Found!", success: false });
    }
    const validPassword = await bcrypt.compare(password, userValid.password);
    if (!validPassword) {
      return res.json({ message: "Wrong Password Enter!", success: false });
    }
    else {
      const token = jwt.sign({ _id: UserRegister._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
      res.cookie("token", token, {
        httpOnly: true, 
        // secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
      });
      res.json({ token, message: "Login Successfully!", success: true });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
}

export const getUser = async (req, res) => {
  try {
    const users = await UserRegister.find();
    res.json({ message: "All User List", success: true, users })
  }
  catch (error) {
    res.json({ message: error.message, success: false })
  }
}