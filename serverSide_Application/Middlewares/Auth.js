import jwt from 'jsonwebtoken';

export const Authenticate  = (req, res, next) =>{
    const token = req.header("Auth");
    if(!token){
        return res.json({message: ""})
    }
    console.log("This is token", token);
    next();
}