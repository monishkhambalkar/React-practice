import React, { useContext } from "react";
import CartContext from "./CartContext";

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Checkout</h2>
      <p>Total Price: ${totalPrice}</p>
      <button onClick={clearCart} style={{ marginTop: "10px" }}>
        Clear Cart
      </button>
    </div>
  );
};

export default Checkout;
