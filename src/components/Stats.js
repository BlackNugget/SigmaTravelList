import React from "react";

const Stats = ({ items }) => {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentagePacked = totalItems
    ? Math.round((packedItems / totalItems) * 100)
    : 0;

  const categoryBreakdown = items.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <footer className="stats">
      <p>
        {packedItems} / {totalItems} items packed ({percentagePacked}%)
      </p>
      <ul>
        {Object.entries(categoryBreakdown).map(([category, count]) => (
          <li key={category}>
            {category}: {count}
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Stats;

