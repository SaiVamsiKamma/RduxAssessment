import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../reducers/productSlice";
import axios from "axios";
import { useCart } from "../hooks/useCart";

const ProductList = () => {
  const products = useSelector((state) => state.products.list);
  const dispatch = useDispatch();
  const [, cartDispatch] = useCart();  // Cart dispatch from useCart hook

  useEffect(() => {
    axios.get("http://localhost:3000/products").then((response) => {
      dispatch(setProducts(response.data));
    });
  }, [dispatch]);

  const addToCart = (product) => {
    // Dispatch 'add to cart' action
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
