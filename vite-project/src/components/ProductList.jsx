import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../reducers/productSlice";  // Correctly import the action
import axios from "axios";
import { useCart } from "../hooks/useCart";

const ProductList = () => {
  const products = useSelector((state) => state.products.list);
  const dispatch = useDispatch();
  const [, cartDispatch] = useCart();  // Destructure to get the dispatch function

  useEffect(() => {
    axios.get("http://localhost:3000/products").then((response) => {
      dispatch(setProducts(response.data)); // Dispatch action to set products
    });
  }, [dispatch]);

  const addToCart = (product) => {
    // Dispatch the action to add product to cart
    cartDispatch({ type: "add to cart", payload: product });
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
    </div>
  );
};

export default ProductList;
