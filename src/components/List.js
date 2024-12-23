import React from "react";

function List({ item, deleteitem, key }) {
  return (
    <div className="list">
      <li>{item}</li>
      <button
        className="del-button"
        onClick={(e) => {
          deleteitem(key);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default List;
