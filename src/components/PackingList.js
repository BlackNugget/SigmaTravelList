import React from "react";
import Item from "./Item";

const PackingList = ({ items, onTogglePacked, onDeleteItem, onUpdateQuantity }) => (
  <div className="list">
    <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onTogglePacked={onTogglePacked}
          onDeleteItem={onDeleteItem}
          onUpdateQuantity={onUpdateQuantity}
        />
      ))}
    </ul>
  </div>
);

export default PackingList;
