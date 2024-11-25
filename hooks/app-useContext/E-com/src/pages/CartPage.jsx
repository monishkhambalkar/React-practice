import React from "react";
import { useCart } from "../contexts/CartContext";
import CartItem from "../components/CartItem";

const CartPage = () => {
  const { cart } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length > 0 ? (
        cart.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <p>Your cart is empty!</p>
      )}
    </div>
  );
};

export default CartPage;
