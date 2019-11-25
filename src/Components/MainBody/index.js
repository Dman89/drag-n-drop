import React from "react";
import "./index.css";
import ListenerContainer from "../ListenerContainer";

function MainBody({ data: { rows, components } }) {
  return (
    <div className="Main-Body">
      {rows.map(elements => (
        <ListenerContainer
          id={elements.id}
          style={elements.style}
          elements={elements}
          components={components}
          key={elements.id}
        />
      ))}
    </div>
  );
}

export default MainBody;
