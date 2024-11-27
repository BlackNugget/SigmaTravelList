// import React, { useState } from "react";


// function App() {
//   const [items, setItems] = useState([]);


//   const handleAddItem = (newItem) => {
//     setItems((prevItems) => [...prevItems, newItem]);
//   };


//   const handleTogglePacked = (id) => {
//     setItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id ? { ...item, packed: !item.packed } : item
//       )
//     );
//   };

//   const handleDeleteItem = (id) => {
//     setItems((prevItems) => prevItems.filter((item) => item.id !== id));
//   };

//   const handleUpdateQuantity = (id, newQuantity) => {
//     setItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   return (
//     <div className="app">
//       <h1>My Travel List</h1>
//       <Form onAddItem={handleAddItem} />
//       <PackingList
//         items={items}
//         onTogglePacked={handleTogglePacked}
//         onDeleteItem={handleDeleteItem}
//         onUpdateQuantity={handleUpdateQuantity}
//       />
//       <Stats items={items} />
//     </div>
//   );
// }


// const Form = ({ onAddItem }) => {
//   const [description, setDescription] = useState("");
//   const [quantity, setQuantity] = useState(1);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (description.trim()) {
//       const newItem = {
//         id: Date.now(),
//         description,
//         quantity,
//         packed: false,
//       };
//       onAddItem(newItem);
//       setDescription("");
//       setQuantity(1);
//     }
//   };

//   return (
//     <form className="add-form" onSubmit={handleSubmit}>
//       <h3>What do you need to pack?</h3>
//       <select
//         value={quantity}
//         onChange={(e) => setQuantity(Number(e.target.value))}
//       >
//         {[...Array(10).keys()].map((num) => (
//           <option key={num + 1} value={num + 1}>
//             {num + 1}
//           </option>
//         ))}
//       </select>
//       <input
//         type="text"
//         placeholder="Item..."
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <button type="submit">Add</button>
//     </form>
//   );
// };


// const PackingList = ({
//   items,
//   onTogglePacked,
//   onDeleteItem,
//   onUpdateQuantity,
// }) => (
//   <div className="list">
//     <ul>
//       {items.map((item) => (
//         <Item
//           key={item.id}
//           item={item}
//           onTogglePacked={onTogglePacked}
//           onDeleteItem={onDeleteItem}
//           onUpdateQuantity={onUpdateQuantity}
//         />
//       ))}
//     </ul>
//   </div>
// );


// const Item = ({ item, onTogglePacked, onDeleteItem, onUpdateQuantity }) => {
//   const [editQuantity, setEditQuantity] = useState(item.quantity);

//   const handleQuantityChange = () => {
//     onUpdateQuantity(item.id, editQuantity);
//   };

//   return (
//     <li>
//       <label>
//         <input
//           type="checkbox"
//           checked={item.packed}
//           onChange={() => onTogglePacked(item.id)}
//         />
//         <span
//           style={{
//             textDecoration: item.packed ? "line-through" : "none",
//           }}
//         >
//           {item.quantity} x {item.description}
//         </span>
//       </label>
//       <input
//         type="number"
//         min="1"
//         value={editQuantity}
//         onChange={(e) => setEditQuantity(Number(e.target.value))}
//         style={{ width: "60px", marginLeft: "10px" }}
//       />
//       <button onClick={handleQuantityChange} className="update-button">
//         Update
//       </button>
//       <button onClick={() => onDeleteItem(item.id)}>Delete</button>
//     </li>
//   );
// };


// const Stats = ({ items }) => {
//   const totalItems = items.length;
//   const packedItems = items.filter((item) => item.packed).length;
//   const percentagePacked = totalItems
//     ? Math.round((packedItems / totalItems) * 100)
//     : 0;  

//   return (
//     <footer className="stats">
//       <p>
//         {packedItems} / {totalItems} items packed ({percentagePacked}%)
//       </p>
//     </footer>
//   );
// };

// export default App;