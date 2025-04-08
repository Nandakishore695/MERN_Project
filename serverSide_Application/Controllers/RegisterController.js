import bcrypt from "bcryptjs";
import { UserRegister } from "../Models/RegisterModel.js";

export const register = async (req, res) => {
  const { name, email, password, re_password } = req.body; //object destructuring
  try {
    const validEmail = await UserRegister.findOne({ email });
    if (validEmail) {
      return res.json({ message: "Email Already Exists!", success: false})
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
      res.json({ message: "Login Successfully!", success: true });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
}