import mongoose from "mongoose";
const orderSchema = mongoose.Schema(
  {
    Items: [
      {
        name: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        qty: {
          type: Number,
          default: 1,
        },
        image: {
          type: String,
        },
        product: {
          type: mongoose.Schema.ObjectId,
          ref: "product",
          required: true,
        },
      },
    ],
    shippingDetails: {
      name: {
        type: String,
        required: true,
      },
      phone: {
        type: Number,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      pincode: {
        type: Number,
        required: true,
      },
    },

    user: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
    },
    orderStatus: {
      type: String,
      default: "Order placed waiting for shipment",
    },
    shippingCost: {
      type: Number,
      default: 0,
    },
    extranalCharges: {
      type: Number,
      default: 0,
    },
    totalPrice: {
      type: Number,
      default: 0,
    },
    paymentInfo: {
      id: {
        type: String,
        required: true,
      },
      paymentStatus: {
        type: String,
        required: true,
      },
      paymentMethod: {
        type: String,
        required: true,
      },
    },
    deliverAt: Date,
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
