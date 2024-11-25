import React from "react";
import { useCart } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart } = useCart();

  return (
    <div>
      <p>{item.name}</p>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
