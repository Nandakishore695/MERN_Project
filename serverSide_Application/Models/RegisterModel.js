import mongoose from "mongoose";

const userRegisterSchema = new mongoose.Schema({ 
    name:{type: String , required: true},
    email:{type: String , required: true},
    password:{type: String , required: true},
    re_password:{type: String , required: true},
    createDate:{type: Date, default: Date.now}
});
export const UserRegister = mongoose.model("UserRegister", userRegisterSchema);