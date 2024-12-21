import React from "react";
import { useCart } from "../hooks/useCart";

const Cart = () => {
  const [cart, dispatch] = useCart();  // Access the cart state and dispatch function

  const removeFromCart = (id) => {
    dispatch({ type: "remove from cart", payload: id });
  };

  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
