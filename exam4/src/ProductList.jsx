import React, { useState } from "react";

function ProductList({ arr, handleDelete, handleEdit }) {
  const [sortOrder, setSortOrder] = useState("low");

  const sortedArr = [...arr].sort((a, b) => {
    const priceA = Number(a.Price) || 0;
    const priceB = Number(b.Price) || 0;
    return sortOrder == "low" ? priceA - priceB : priceB - priceA;
  });

  return (
    <div>
      <label htmlFor="sort">Sort by Price: </label>
      <select
        id="sort"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="low">Low to High</option>
        <option value="high">High to Low</option>
      </select>

      {sortedArr.map((el) => (
        <div key={el.id}>
          <h2>{el.productName}</h2>
          <img src={el.image} alt="" width="200px" height="200px" />
          <p>
            ₹{el.Price} - {el.Description}
          </p>
          <button onClick={() => handleDelete(el.id)}>Delete</button>
          <button onClick={() => handleEdit(el.id)}>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
