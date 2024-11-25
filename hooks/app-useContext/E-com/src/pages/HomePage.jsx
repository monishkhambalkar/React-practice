import React from "react";
import { useCart } from "../contexts/CartContext";

const HomePage = () => {
  const { addToCart } = useCart();

  const items = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
  ];

  return (
    <div>
      <h2>Home Page</h2>
      {items.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
