import React, { useState, useEffect } from "react";
import axios from "axios";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
   
    axios
      .get("http://localhost:3000/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));

   
    axios
      .get("http://localhost:3000/cart")
      .then((response) => setCart(response.data))
      .catch((error) => console.error("Error fetching cart:", error));
  }, []);

  const addToCart = async (product) => {
    try {
     
      await axios.post("http://localhost:3000/cart", product);

   
      setCart((prevCart) => [...prevCart, product]);

      console.log("Product added to cart:", product);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  const removeFromCart = async (productId) => {
    try {

      await axios.delete(`http://localhost:3000/cart/${productId}`);

  
      setCart((prevCart) => prevCart.filter((item) => item.id !== productId));

      console.log("Product removed from cart:", productId);
    } catch (error) {
      console.error("Error removing product from cart:", error);
    }
  };

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}

      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
