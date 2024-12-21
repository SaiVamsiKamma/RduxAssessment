import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "orders",
  initialState: { list: [] },
  reducers: {
    addOrder: (state, action) => {
      state.list.push(action.payload);
    },
    updateOrderStatus: (state, action) => {
      const order = state.list.find((o) => o.id === action.payload.id);
      if (order) order.status = action.payload.status;
    },
  },
});

export const { addOrder, updateOrderStatus } = orderSlice.actions;
export default orderSlice.reducer;
