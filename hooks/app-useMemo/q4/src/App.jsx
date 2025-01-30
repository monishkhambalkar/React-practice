import { useState, useMemo } from "react";
import "./App.css";

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1000 },
  { id: 2, name: "Shoes", category: "Fashion", price: 100 },
  { id: 3, name: "Phone", category: "Electronics", price: 800 },
  { id: 4, name: "T-shirt", category: "Fashion", price: 50 },
  { id: 5, name: "Headphones", category: "Electronics", price: 150 },
];

function App() {
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredAndSortedProduct = useMemo(() => {
    console.log("Filtering & Sorting Products...");

    let filtered = products;

    // Apply category filter
    if (selectedCategory !== "All") {
      console.log(selectedCategory);
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Sort by price
    return filtered.sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );
  }, [selectedCategory, sortOrder]);

  return (
    <>
      <div>
        <h2>Product List</h2>
        <label htmlFor="">Filter by Category: </label>
        <select
          name=""
          id=""
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All"> All</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
        </select>
        <label htmlFor="">Sort by Price:</label>
        <select
          name=""
          id=""
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">low to high</option>
          <option value="desc">high to low</option>
        </select>
        <ul>
          {filteredAndSortedProduct.map((product) => (
            <li key={product.id}>
              {" "}
              {product.name} - {product.category} - ₹{product.price}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
