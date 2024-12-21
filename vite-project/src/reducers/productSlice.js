// src/reducers/productSlice.js
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: { list: [] },
  reducers: {
    setProducts: (state, action) => {
      state.list = action.payload; // Sets the list of products
    },
  },
});

// Export the action and reducer
export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
