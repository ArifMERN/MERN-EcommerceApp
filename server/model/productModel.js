import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide the product name"],
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
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      pubicId: {
        type: String,
        required: true,
      },
    },
  ],
});
