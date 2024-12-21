// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducers/productSlice";  // Import the product slice reducer

const store = configureStore({
  reducer: {
    products: productReducer, // Attach productReducer under the 'products' key
  },
});

export default store;
