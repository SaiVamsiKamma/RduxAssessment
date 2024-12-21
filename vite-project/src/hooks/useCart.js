import { useReducer } from "react";

// Reducer function to handle cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case "add to cart":
   
      if (state.some(item => item.id === action.payload.id)) {
        return state;
      }
      return [...state, action.payload];  
    case "remove from cart":
      return state.filter((item) => item.id !== action.payload);  
    default:
      return state;
  }
};


export const useCart = () => useReducer(cartReducer, []);
