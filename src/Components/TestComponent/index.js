import React from "react";
import "./index.css";

function TestComponent({ id, style, options: { message } }) {
  return (
    <div className="Test-Component" id={id} style={style}>
      {message || "Welcome to the Jungle!"}
    </div>
  );
}

export default TestComponent;
