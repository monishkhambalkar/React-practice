import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../features/cart/cartSlice";
import { RootState, AppDispatch } from "../app/store";

export default function Cart() {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((state: RootState) => state.cart.items);

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Cart</h2>

      {items.map((item) => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <p>₹{item.price}</p>
          <p>Qty: {item.quantity}</p>

          <button onClick={() => dispatch(increaseQuantity(item.id))}>
            +
          </button>

          <button onClick={() => dispatch(decreaseQuantity(item.id))}>
            -
          </button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹{totalPrice}</h3>

      <button onClick={() => dispatch(clearCart())}>
        Clear Cart
      </button>
    </div>
  );
}
