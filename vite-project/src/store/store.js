import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducers/productSlice";
import orderReducer from "../reducers/orderSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    orders: orderReducer,
  },
});

export default store;
