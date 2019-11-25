import React from "react";
import "./index.css";
import DynamicComponent from "../DynamicComponent";

function SidePanel({ components }) {
  return (
    <div className="Side-Panel">
      {Object.values(components).map(component => {
        const { defaultOptions: options, defaultStyle: style } = component;
        return (
          <DynamicComponent {...component} options={options} style={style} />
        );
      })}
    </div>
  );
}

export default SidePanel;
