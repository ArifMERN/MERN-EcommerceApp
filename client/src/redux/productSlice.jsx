import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
};
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    GETALLPRODUCTS: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const { GETALLPRODUCTS } = productSlice.actions;
export default productSlice.reducer;
