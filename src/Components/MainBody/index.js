import React from "react";
import "./index.css";
import ListenerContainer from "../ListenerContainer";

function MainBody({ data: { rows, components } }) {
  return (
    <div className="Main-Body">
      {rows.map(elements => (
        <ListenerContainer
          style={elements.style}
          elements={elements}
          components={components}
        />
      ))}
    </div>
  );
}

export default MainBody;
