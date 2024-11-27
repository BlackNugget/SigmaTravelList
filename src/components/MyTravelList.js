import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const MyTravelList = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("name");
  const [filterCategory, setFilterCategory] = useState("all");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleTogglePacked = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleDeleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleClearAll = () => {
    setItems([]);
  };

  const filteredItems = items
    .filter((item) =>
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((item) =>
      filterCategory === "all" ? true : item.category === filterCategory
    )
    .sort((a, b) => {
      if (sortOption === "name") return a.description.localeCompare(b.description);
      if (sortOption === "quantity") return a.quantity - b.quantity;
      if (sortOption === "status") return a.packed - b.packed;
      return 0;
    });

  return (
    <div className="app">
      <Logo />

      <div className="controls">
        <input
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="name">Sort by Name</option>
          <option value="quantity">Sort by Quantity</option>
          <option value="status">Sort by Packed Status</option>
        </select>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="clothing">Clothing</option>
          <option value="electronics">Electronics</option>
          <option value="toiletries">Toiletries</option>
          <option value="miscellaneous">Miscellaneous</option>
        </select>
        <button onClick={handleClearAll}>Clear All</button>
      </div>

      <Form onAddItem={handleAddItem} />
      <PackingList
        items={filteredItems}
        onTogglePacked={handleTogglePacked}
        onDeleteItem={handleDeleteItem}
        onUpdateQuantity={handleUpdateQuantity}
      />
      <Stats items={items} />
    </div>
  );
};

export default MyTravelList;
