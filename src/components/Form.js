import React, { useState } from "react";

const Form = ({ onAddItem }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("miscellaneous");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      const newItem = {
        id: Date.now(),
        description,
        quantity,
        packed: false,
        category,
      };
      onAddItem(newItem);
      setDescription("");
      setQuantity(1);
      setCategory("miscellaneous");
    }
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need to pack?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {[...Array(10).keys()].map((num) => (
          <option key={num + 1} value={num + 1}>
            {num + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="clothing">Clothing</option>
        <option value="electronics">Electronics</option>
        <option value="toiletries">Toiletries</option>
        <option value="miscellaneous">Miscellaneous</option>
      </select>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default Form;
