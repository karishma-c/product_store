import express from "express";
import { getProducts, updateProduct, createProduct, deleteProduct } from "../controllers/product.controller.js";

const router = express.Router();

//endpoint to get all the products
router.get("/", getProducts)

//get request and response(endpoint to get a product)
router.post("/", createProduct)

//endpoint to update a product
router.put("/:id", updateProduct) //we can use put as well as patch both are same, put is used to update all fields, patch is used to update some of the fields

//endpoint to delete a product
router.delete('/:id', deleteProduct) //id is dynamic(unique id generated from the api request)

export default router;
