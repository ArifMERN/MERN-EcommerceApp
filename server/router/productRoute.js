import express from "express";
import { getAllProducts } from "../controller/productController.js";
const productRouters = express.Router();

productRouters.get("/", getAllProducts);
// get one product
// create a product
// amend a product
// delete a product

export default productRouters;
