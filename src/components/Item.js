import React, { useState } from "react";

function Item({ name, category }) {
  
  const [isAdded, setAdded] = useState(false)

  function handleClick() {
    setAdded((isAdded) => !isAdded)
  }

  return (
    <li className={isAdded ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={isAdded ? "remove" : "add"}>{isAdded ? "Remove From Cart" : "Add To Cart"}</button>
    </li>
  );
}

export default Item;
