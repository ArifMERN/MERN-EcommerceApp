import Product from "../model/productModel.js";
import response from "../utils/Response.js";
// get all products...
export const getAllProducts = async (req, res) => {
  const products = await Product.find().limit(20);
  if (products === null) {
    response(res, 400, false, "no products found");
  }
  response(res, 200, true, products);
};

// get a single product details
export const getProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (product === null) {
    response(res, 400, false, "product not found");
  } else {
    response(res, 200, true, product);
  }
};

// @admin tasks
//create a product
export const createProduct = async (req, res) => {
  const { name, price, description, category, stock } = req.body;
  if (!name || !price || !description || !category) {
    return res
      .status(400)
      .json({ success: false, message: "all fields are required" });
  }
  try {
    const product = new Product({ name, price, description, category, stock });
    const response = await product.save();
    res.status(200).json({
      success: true,
      message: `product ${response.name} created successfully`,
    });
  } catch (error) {
    console.log(error.message);
  }
};
// @admin tasks
//amend a product
export const updateProduct = async (req, res) => {};
// @admin tasks
//delete a product
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    if (product !== null) {
      response(res, 200, true, product);
    } else {
      response(res, 400, false, "the product is not available");
    }
  } catch (error) {
    console.log(error.message);
  }
};
