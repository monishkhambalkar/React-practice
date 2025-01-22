import React, { useReducer, useState } from "react";
import "./App.css";
import { act } from "react";

const initialState = {
  cart: [],
  total: 0,
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { id, name, price } = action.payload;

      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        const updatedCart = state.cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        return {
          ...state,
          cart: updatedCart,
          total: calculateTotal(updatedCart),
        };
      } else {
        const updatedCart = [...state.cart, { id, name, price, quantity: 1 }];
        return {
          ...state,
          cart: updatedCart,
          total: calculateTotal(updatedCart),
        };
      }
    }
    case "REMOVE": {
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cart: updatedCart,
        total: calculateTotal(updatedCart),
      };
    }
    case "UPDATE": {
      const { id, quantity } = action.payload;
      const updatedCart = state.cart
        .map((item) =>
          item.id === id ? { ...item, quantity: quantity } : item
        )
        .filter((item) => item.quantity > 0);
      return {
        ...state,
        cart: updatedCart,
        total: calculateTotal(updatedCart),
      };
    }

    case "CLEAR":
      return initialState;
  }
}

function calculateTotal(cart) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const handleAddItem = (item) => {
    dispatch({ type: "ADD", payload: item });
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE", payload: { id, quantity } });
  };

  const handleClearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Shopping Cart</h2>

      {/* Item Buttons for Demo */}
      <div>
        <button
          onClick={() => handleAddItem({ id: 1, name: "Apple", price: 1.5 })}
        >
          Add Apple
        </button>
        <button
          onClick={() => handleAddItem({ id: 2, name: "Banana", price: 0.9 })}
        >
          Add Banana
        </button>
        <button
          onClick={() => handleAddItem({ id: 3, name: "Cherry", price: 2.5 })}
        >
          Add Cherry
        </button>
      </div>

      {/* Cart Items */}
      <h3>Cart Items:</h3>
      {state.cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {state.cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
              <button
                onClick={() => handleRemoveItem(item.id)}
                style={{ marginLeft: "10px" }}
              >
                Remove
              </button>
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) =>
                  handleUpdateQuantity(item.id, parseInt(e.target.value, 10))
                }
                style={{ marginLeft: "10px" }}
              />
            </li>
          ))}
        </ul>
      )}

      {/* Total */}
      <h3>Total: ${state.total.toFixed(2)}</h3>

      {/* Clear Cart Button */}
      {state.cart.length > 0 && (
        <button onClick={handleClearCart}>Clear Cart</button>
      )}
    </div>
  );
}

export default App;
