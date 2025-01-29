import React, { useState, useMemo } from "react";
import "./App.css";

const items = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Grape",
  "Mango",
  "Orange",
  "Papaya",
  "Pineapple",
  "Strawberry",
  "Watermelon",
];

function App() {
  const [search, setSearch] = useState("");

  const filteredItems = useMemo(() => {
    console.log("Filtering items...");
    return items.filter((item) =>
      item.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }, [search]);

  return (
    <div>
      <h2>Filtered List</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
