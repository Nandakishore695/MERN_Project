import express from "express";
import bodyParser from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./Routes/UserRoutes.js";
import productRoutes from "./Routes/ProductsRoutes.js";
import cartRouters from "./Routes/CartRoutes.js";
import shippingAddressRouters from "./Routes/ShippingAddressRoutes.js";

const application = express();
application.use(bodyParser.json());
dotenv.config();


// Start Server
application.listen(process.env.PORT_NUMBE, () => { console.log(`Server started on port ${process.env.PORT_NUMBE}`); });

// MongoDB Connection
mongoose.connect(process.env.MONGOOSE_CONNECTION_URL, { dbName: "Mern_E-Commerce" })
  .then(() => { console.log("Mongoose Connected"); })
  .catch((error) => { console.log("MongoDB Connection Error:", error); });

// const corsOptions = 
application.use(cors({
  origin: true,
  methods: ['GET', "POST", "DELETE"],
  credentials: true
}));

application.use("/api/user", userRouter);
application.use("/api/product", productRoutes);
application.use("/api/carts", cartRouters);
application.use("/api/shippingAddress", shippingAddressRouters);