import React from "react";

const ItemActions = ({ item, updateItem, deleteItem, setNewItem }) => {
  const handleUpdate = () => {
    setNewItem(item.title);
    updateItem(item.id, { title: item.title });
  };

  return (
    <span>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={() => deleteItem(item.id)}>Delete</button>
    </span>
  );
};

export default ItemActions;
