import React from "react";
import Item from "./Item";

const ItemList = ({ items, updateItem, deleteItem, setNewItem }) => {
  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          updateItem={updateItem}
          deleteItem={deleteItem}
          setNewItem={setNewItem}
        />
      ))}
    </ul>
  );
};

export default ItemList;
