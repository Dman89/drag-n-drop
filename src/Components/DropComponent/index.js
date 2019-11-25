import React from "react";
import { useDrag } from "react-dnd";
import "./index.css";
import DynamicComponent from "../DynamicComponent";

function DropComponent({ component }) {
  const { defaultOptions: options, defaultStyle: style, id } = component;
  const [{ isDragging }, drag] = useDrag({
    item: { type: "ALL", id },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });
  return (
    <div
      className="Drop-Component"
      style={{ cursor: "move", opacity: isDragging ? "0.5" : "1" }}
      ref={drag}
    >
      <DynamicComponent {...component} options={options} style={style} />
    </div>
  );
}

export default DropComponent;
