import React from "react";
import "./index.css";
import DynamicComponent from "../DynamicComponent";

function ListenerContainer({ style, elements, components }) {
  return (
    <div className="Listener-Container" style={style}>
      {elements.components.map(component => {
        const dynamicElement = components[component.id];
        const dynamicData = {
          ...dynamicElement,
          options: {
            ...dynamicElement.defaultOptions,
            ...component.options
          },
          style: {
            ...dynamicElement.defaultStyle,
            ...component.style
          }
        };
        return <DynamicComponent {...dynamicData} />;
      })}
    </div>
  );
}

export default ListenerContainer;
