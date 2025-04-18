import mongoose from "mongoose";

const userDetail = new mongoose.Schema({
    name: {type:String, require: true},
    email: {type:String, require: true},
    password: {type:String, require: true},
})

export const User = mongoose.model("user", userDetail);