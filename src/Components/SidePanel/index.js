import React from "react";
import "./index.css";
import DropComponent from "../DropComponent";

function SidePanel({ components }) {
  return (
    <div className="Side-Panel">
      {Object.values(components).map(component => (
        <DropComponent component={component} key={component.id} />
      ))}
    </div>
  );
}

export default SidePanel;
