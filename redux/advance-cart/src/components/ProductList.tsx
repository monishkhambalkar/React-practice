import {useDispatch} from 'react-redux';
import { addItem } from "../features/cart/cartSlice";
import { AppDispatch } from "../app/store";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
];

export default function ProductList() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h4>{product.name}</h4>
          <p>₹{product.price}</p>
          <button onClick={() => dispatch(addItem(product))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}