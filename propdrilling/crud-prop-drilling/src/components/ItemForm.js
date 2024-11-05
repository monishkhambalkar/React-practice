import React from "react";

const ItemForm = ({ newItem, setNewItem, addItem }) => {
  const handleAdd = () => {
    addItem({ title: newItem });
    setNewItem("");
  };

  return (
    <div>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="New item"
      />
      <button onClick={handleAdd}>Add Item</button>
    </div>
  );
};

export default ItemForm;
