import React, { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="project-name">
        <h2>Counter</h2>
      </div>
      <div className="counter">
        <div className="counter-value">{count}</div>
        <div className="counter-buttons">
          <button
            className="count-btn btn-inc"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Increment
          </button>
          <button
            className="count-btn btn-dec"
            onClick={() => {
              setCount(count - 1);
            }}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}
