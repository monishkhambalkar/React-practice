import React, { useState, useCallback } from 'react';
import './App.css'
import ProductItem from './ProductItem';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = useCallback((product) => {
    setCart(prevCart => [...prevCart, product]);
  }, []);

  return (
    <div>
      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  )

}


export default App