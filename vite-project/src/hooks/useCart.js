import { useReducer } from "react";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "add to cart":
      return [...state, action.payload];  // Add item to the cart
    case "remove from cart":
      return state.filter((item) => item.id !== action.payload);  // Remove item from cart
    default:
      return state;
  }
};

export const useCart = () => useReducer(cartReducer, []);
