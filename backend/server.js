import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

//create a express app
const app = express();

//allows to accept JSON data in req.body(middleware)
app.use(express.json());

//function to get the routes(endpoints)
app.use("/api/products", productRoutes); //the endpoint should start from here -> /api/products and the remaining from the routes file eg: /api/products/ or /api/products/id 

//app listen to the port 
app.listen(5000, () => {
    connectDB()
    console.log("Server started at http://localhost:5000");
})