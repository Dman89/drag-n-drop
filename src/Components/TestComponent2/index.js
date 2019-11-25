import React from "react";
import "./index.css";

function TestComponent2({ id, style, options: { message } }) {
  return (
    <div className="Test-Component2" id={id} style={style}>
      <h4>{message || "Title Element"}</h4>
    </div>
  );
}

export default TestComponent2;
