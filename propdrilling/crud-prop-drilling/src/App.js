import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newItem, setNewItem] = useState("");

  const fetchItems = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setItems(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const addItem = async (item) => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      item
    );
    setItems([...items, response.data]);
  };

  const updateItem = async (id, item) => {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      item
    );
    setItems(items.map((i) => (i.id === id ? response.data : i)));
  };

  const deleteItem = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    setItems(items.filter((i) => i.id !== id));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h1>CRUD with Prop Drilling</h1>
      <ItemForm newItem={newItem} setNewItem={setNewItem} addItem={addItem} />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ItemList
          items={items}
          updateItem={updateItem}
          deleteItem={deleteItem}
          setNewItem={setNewItem}
        />
      )}

      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default App;
