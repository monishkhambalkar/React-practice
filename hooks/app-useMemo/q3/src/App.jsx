import React, { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState([
    { id: 1, name: "Product A", price: 100, quantity: 2 },
    { id: 2, name: "Product B", price: 50, quantity: 3 },
  ]);

  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  });

  return (
    <>
      <h2>Shopping cart</h2>
      <u>
        {cart.map((item, index) => (
          <li key={item.id}>
            {item.name} - {item.price} - {item.quantity}
          </li>
        ))}
      </u>

      <h3>Total Price: ₹{totalPrice}</h3>
    </>
  );
}

export default App;
