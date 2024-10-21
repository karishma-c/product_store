import express from "express";
import { getProducts, updateProduct, createProduct, deleteProduct } from "../controllers/product.controller.js";

const router = express.Router();

app.get("/", (req,res) => {
    res.json("Hello");
})

//endpoint to get all the products
router.get("https://project-backend-sage.vercel.app/", getProducts)

//get request and response(endpoint to get a product)
router.post("https://project-backend-sage.vercel.app/", createProduct)

//endpoint to update a product
router.put("https://project-backend-sage.vercel.app/:id", updateProduct) //we can use put as well as patch both are same, put is used to update all fields, patch is used to update some of the fields

//endpoint to delete a product
router.delete('https://project-backend-sage.vercel.app/:id', deleteProduct) //id is dynamic(unique id generated from the api request)

export default router;
