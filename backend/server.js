import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";
import mongoose from "mongoose";

dotenv.config();

//create a express app
const app = express();

app.use(express.json());  //allows to accept JSON data in req.body(middleware)

//endpoint to get all the products
app.get("/api/products", async (req,res) => {
    try {
        const products = await Product.find({}); //empty curly braces means to get all the products
        res.status(200).json({ success: true, data: products});
    } catch (error) {
        console.log("error in fetching products:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
})

//get request and response(endpoint to get a product)
app.post("/api/products", async (req,res) => {
    const product = req.body; //getting the product

    if(!product.name || !product.price || !product.image) { //checking for requirements
        return res.status(400).json({success: false, message: "Please provide all fields"})
    }

    const newProduct = new Product(product) //Product is coming from product.model.js, product is from the req.body
    try {
        await newProduct.save(); //creating and saving the new product in db
        res.status(201).json({success: true, data: newProduct}) //status 201 -> something is created
    } catch (error) {
        console.error("Error in Create Product:", error.message);
        res.status(500).json({success: false, message: "Server Error"}) //status 500 -> internal server error
    }
})

//endpoint to update a product
//we can use put as well as patch both are same, put is used to update all fields, patch is used to update some of the fields
app.put("/api/products/:id", async (req, res) => {
    const {id} = req.params;
    const product = req.body; //fields to be updated

    if(!mongoose.Types.ObjectId.isValid(id)) { //to check whether the id is valid or not
        return res.status(404).json({ success: false, message: "InvalidProduct Id" });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true});
        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
})

app.delete('/api/products/:id', async (req, res) => { //id is dynamic(unique id generated from the api request)
    const {id} = req.params;

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted" })
    } catch (error) {
        res.status(404).json({ success: false, message: "Product not found" })
    }
})

//app listen to the port 
app.listen(5000, () => {
    connectDB()
    console.log("Server started at http://localhost:5000");
})