import React, { useState } from "react";

const Item = ({ item, onTogglePacked, onDeleteItem, onUpdateQuantity }) => {
  const [editQuantity, setEditQuantity] = useState(item.quantity);

  const handleQuantityChange = () => {
    onUpdateQuantity(item.id, editQuantity);
  };

  return (
    <li style={{ background: item.packed ? "#d3ffd3" : "#ffd3d3" }}>
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onTogglePacked(item.id)}
        />
        <span>
          {item.quantity} x {item.description} ({item.category})
        </span>
      </label>
      <input
        type="number"
        min="1"
        value={editQuantity}
        onChange={(e) => setEditQuantity(Number(e.target.value))}
      />
      <button onClick={handleQuantityChange}>Update</button>
      <button onClick={() => onDeleteItem(item.id)}>Delete</button>
    </li>
  );
};

export default Item;

