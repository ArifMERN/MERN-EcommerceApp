import express from "express";
import {
  createOrder,
  deleteOrder,
  getOrder,
  updateOrder,
  getAllOrders,
} from "../controller/order.controller.js";
import Authenticator from "../middleware/AuthVerifier.middleware.js";

const orderRoute = express.Router();
// read order details.
orderRoute.get("/:id", Authenticator, getOrder);
// create order
orderRoute.post("/create", Authenticator, createOrder);
// @admin tasks..
// update order
orderRoute.patch("/:id", Authenticator, updateOrder);
// delete order
orderRoute.delete("/:id", Authenticator, deleteOrder);
orderRoute.get("/orders/all", Authenticator, getAllOrders);
export default orderRoute;
