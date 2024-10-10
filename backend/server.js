import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

//create a express app
const app = express();

//get request and response
app.get("/products", (req,res) => {})

//db connection check
//console.log(process.env.MONGO_URI);

//app listen to the port 
app.listen(5000, () => {
    connectDB()
    console.log("Server started at http://localhost:5000");
})