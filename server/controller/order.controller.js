import Order from "../model/orderModel.js";
import response from "../utils/Response.js";
export const getOrder = async (req, res) => {
  const order = await Order.findById(req.params.id);
  try {
    if (!order) return response(res, 404, false, "the order is not found!");
    response(res, 200, true, order);
  } catch (error) {
    console.log(error.message);
  }
};
export const createOrder = async (req, res) => {
  // const data = req.body;

  const order = await Order.create({
    ...req.body,
    user: req.payload.id,
  });

  try {
    response(res, 200, true, order);
  } catch (e) {
    response(res, 400, false, e.message);
    // console.log(e.message);
  }
};
export const updateOrder = async (req, res) => {};
export const deleteOrder = async (req, res) => {};
export const getAllOrders = async (req, res) => {
  const orders = await Order.find();
  if (!orders) return response(res, 400, false, "wrong");
  try {
    response(res, 200, true, orders);
  } catch (e) {
    console.log(e.message);
  }
};
