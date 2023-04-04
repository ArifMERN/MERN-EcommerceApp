import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide the product name"],
    unique: true,
  },
  price: {
    type: Number,
    required: [true, "please provide price"],
  },
  stock: {
    type: Number,
    default: 1,
  },
  description: {
    type: String,
    required: [true, "please provide the product description"],
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: true,
      },

      rating: {
        type: Number,
        requried: true,
      },
      comment: {
        type: String,
        requried: true,
      },
    },
  ],

  images: [
    {
      pubicId: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "category is required"],
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
