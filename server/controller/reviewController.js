import Product from "../model/productModel.js";
import User from "../model/userModel.js";
import response from "../utils/Response.js";
export const addReview = async (req, res) => {
  const { rating, comment, productId } = req.body;
  const review = {
    user: req.payload.id,
    rating,
    comment,
  };
  if (!rating || !comment || !productId)
    return response(res, 400, false, "all fields are required!");

  const product = await Product.findById(productId);
  try {
    if (!product)
      return response(res, 404, false, "authentication failed login again");
    var isReviewed = false;
    product.reviews.find((userReview) => {
      if (userReview.user.toString() === req.payload.id.toString())
        isReviewed = true;
    });

    if (isReviewed) {
      product.reviews.forEach((element) => {
        (element.rating = rating), (element.comment = comment);
      });
    } else {
      product.reviews.push(review);
    }

    await product.save();
    response(res, 200, true, product);
  } catch (e) {
    console.log(e.message);
  }
};
export const updateReview = (req, res) => {};
export const deleteReview = (req, res) => {};
