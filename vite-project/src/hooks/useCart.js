import { useReducer } from "react";

// Reducer function to handle cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case "add to cart":
      // Add the item to the cart if it's not already in the cart
      if (state.some(item => item.id === action.payload.id)) {
        return state;
      }
      return [...state, action.payload];  // Add item to cart
    case "remove from cart":
      return state.filter((item) => item.id !== action.payload);  // Remove item from cart
    default:
      return state;
  }
};

// Custom hook to manage cart state
export const useCart = () => useReducer(cartReducer, []);
