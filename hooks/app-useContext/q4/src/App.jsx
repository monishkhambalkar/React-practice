import React, { useState } from "react";
import ProductList from "./ProductList";
import CartSummary from "./CartSummary";
import Checkout from "./Checkout";
import "./App.css";

function App() {
  return (
    <>
      <div style={{ padding: "20px" }}>
        <h1>Shopping Cart</h1>
        <ProductList />
        <CartSummary />
        <Checkout />
      </div>
    </>
  );
}

export default App;
