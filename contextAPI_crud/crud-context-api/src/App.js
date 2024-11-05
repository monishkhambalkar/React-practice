import React, { useContext, useEffect, useState } from "react";
import { CrudContext, CrudProvider } from "./context/CrudContext";

const App = () => {
  return (
    <CrudProvider>
      <ItemList />
    </CrudProvider>
  );
};

const ItemList = () => {
  const { items, fetchItems, addItem, updateItem, deleteItem } =
    useContext(CrudContext);
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const handleAdd = () => {
    addItem({ title: newItem });
    setNewItem("");
  };

  const handleUpdate = (id) => {
    updateItem(id, { title: newItem });
    setNewItem("");
  };

  return (
    <div>
      <h1>CRUD with Context API</h1>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="New item"
      />
      <button onClick={handleAdd}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.title}{" "}
            <button onClick={() => handleUpdate(item.id)}>Update</button>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
