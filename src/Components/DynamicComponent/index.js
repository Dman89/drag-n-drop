import React from "react";
import "./index.css";

function DynamicComponent({ element: Element, id, style, options }) {
  const componentData = { id, style, options };
  return <Element {...componentData} />;
}

export default DynamicComponent;
