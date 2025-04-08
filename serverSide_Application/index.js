import express from "express";
import bodyParser from "express";
import mongoose from "mongoose";
// import cors from "cors"
import userRouter from "./Routes/UserRoutes.js";
import productRoutes from "./Routes/ProductsRoutes.js";
import cardRouters from "./Routes/CartRoutes.js";
import shippingAddressRouters from "./Routes/ShippingAddressRoutes.js";
const application = express();
const portNumber = 3300;
application.use(bodyParser.json());

// Start Server
application.listen(portNumber, () => { console.log(`Server started on port ${portNumber}`); });

// MongoDB Connection
mongoose.connect("mongodb+srv://nandakishore695:01VPoISZnpi1cEHq@cluster0.gqpse.mongodb.net/", { dbName: "Mern_E-Commerce" })
  .then(() => { console.log("Mongoose Connected"); })
  .catch((error) => { console.log("MongoDB Connection Error:", error); });

application.get("/", (req, res) => { res.send("<h1>Welcome To Server</h1>") });
application.use("/api/user", userRouter);
application.use("/api/product", productRoutes);
application.use("/api/carts", cardRouters);
application.use("/api/shippingAddress", shippingAddressRouters);
// application.use(cors({
//   origin: true,
//   methods: ["PUT", "GET", "POST", "DELETE"],
//   credentials: true
// }))