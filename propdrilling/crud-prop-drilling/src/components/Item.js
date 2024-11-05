import React from "react";
import ItemActions from "./ItemActions";

const Item = ({ item, updateItem, deleteItem, setNewItem }) => {
  return (
    <li>
      {item.title}
      <ItemActions
        item={item}
        updateItem={updateItem}
        deleteItem={deleteItem}
        setNewItem={setNewItem}
      />
    </li>
  );
};

export default Item;
