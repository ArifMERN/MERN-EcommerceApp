import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  items: [],
  totalPrice: localStorage.getItem("cartTotal") || 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADDTOCART: (state, action) => {
      const alreadyExist = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (alreadyExist) {
        toast.success("already exist");
        return state;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
        state.totalPrice += action.payload?.price;
        // if (localStorage.getItem("cart") !== null) {
        //   const data = JSON.parse(localStorage.getItem("cart"));
        // }
        // localStorage.setItem("cart", []);
        toast.success("added to cart");
      }
    },
    REMOVEFROMCART: (state, action) => {
      state.items = state.items.filter((val) => val._id !== action.payload._id);
      state.totalPrice -= action.payload?.price;
      toast.success("removed from cart");
    },
    INCREASEQTY: (state, action) => {
      state.items[action.payload.index].qty++;
      state.totalPrice += action.payload.price;
    },
    DECREASEQTY: (state, action) => {
      state.items[action.payload.index].qty--;
      state.totalPrice -= action.payload.price;
    },
  },
});

export const { ADDTOCART, REMOVEFROMCART, INCREASEQTY, DECREASEQTY } =
  cartSlice.actions;
export const GetAllCartItems = (state) => state.cart;
export default cartSlice.reducer;
