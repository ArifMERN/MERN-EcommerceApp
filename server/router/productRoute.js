import express from "express";
import {
  getAllProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} from "../controller/productController.js";
import Authenticator from "../middleware/AuthVerifier.middleware.js";
const productRouters = express.Router();

productRouters.get("/", getAllProducts);

//@admin routes
// get one product
productRouters.get("/:id", getProduct);
// create a product
productRouters.post("/create", Authenticator,createProduct);
// amend a product
productRouters.patch("/:id",Authenticator, updateProduct);
// delete a product
productRouters.delete("/:id",Authenticator, deleteProduct);

export default productRouters;
