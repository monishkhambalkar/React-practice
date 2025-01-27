import React, { useContext } from "react";
import CartContext from "./CartContext";

const products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
];

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <div>
        <h2>Product List</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button
                onClick={() => addToCart(product)}
                style={{ marginLeft: "10px" }}
              >
                Add To cart
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductList;
