import React from "react";
import { useDrop } from "react-dnd";
import "./index.css";
import DynamicComponent from "../DynamicComponent";
import { dropComponent } from "./../../Functions";

function ListenerContainer({ style, elements, components, id }) {
  const [, drop] = useDrop({
    accept: "ALL",
    drop: item => dropComponent(item, id)
  });
  return (
    <div ref={drop} className="Listener-Container" style={style}>
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
        return <DynamicComponent {...dynamicData} key={component.key} />;
      })}
    </div>
  );
}

export default ListenerContainer;
