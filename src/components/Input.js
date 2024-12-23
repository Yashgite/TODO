import React from "react";
import { useState } from "react";

function Input({ addlist }) {
  const [inputtext, setInputtext] = useState("");
  return (
    <div>
      <input
        className="input"
        value={inputtext}
        placeholder="enter something"
        onChange={(e) => setInputtext(e.target.value)}
      ></input>
      <button
        className="button"
        onClick={() => {
          addlist(inputtext);
          setInputtext("");
        }}
      >
        +
      </button>
    </div>
  );
}

export default Input;
