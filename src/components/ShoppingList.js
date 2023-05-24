import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setCategory] = useState("All");

  function handleCategoryChange(e) {
    setCategory(e.target.value)
  }

  const itemList = items.filter((item) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return item.category === selectedCategory;
    }
  })
  
  function renderedItems(itemList) {
    return (
      itemList.map((item) => {
        return <Item key={item.id} name={item.name} category={item.category} />
      })
    )
  }

  const renderedList = renderedItems(itemList);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {renderedList}
      </ul>
    </div>
  );
}

export default ShoppingList;
