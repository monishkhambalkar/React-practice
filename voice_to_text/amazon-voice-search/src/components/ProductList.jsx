// src/components/ProductList.jsx
import React from "react";

const ProductList = ({ products }) => {
  if (!products.length) return <p>No products found</p>;

  return (
    <div style={{ marginTop: 20 }}>
      {products.map((p) => (
        <div key={p.id} style={{ padding: 10, border: "1px solid #ddd", marginBottom: 10 }}>
          <h3>title : {p.title}</h3>
          <p>description : {p.description}</p>
          <p>category : {p.category}</p>
          <p>Price : ₹{p.price}</p>
          <p>Stock : {p.stock}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
