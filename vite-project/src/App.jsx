import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import ThemeToggle from "./components/ThemeToggle";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div>
      
      <Nav></Nav>
      <ThemeToggle />
      <Routes>
        {/* <Route path="/" element={<ProductList />} /> */}
        <Route path="/" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
