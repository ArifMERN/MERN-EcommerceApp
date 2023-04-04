import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: localStorage.getItem("name") || "",
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.name = action.payload;
    },
    REMOVEUSER: (state) => {
      state.name = "";
      localStorage.setItem("name", "");
    },
  },
});

export const { addUser, REMOVEUSER } = userSlice.actions;
export default userSlice.reducer;
