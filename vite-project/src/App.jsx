import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Orders from "./components/Orders";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <div>
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
};

export default App;
