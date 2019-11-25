import React from "react";
import "./index.css";
import ListenerContainer from "../ListenerContainer";

function MainBody({ data: { styles, rows } }) {
  return (
    <div className="Main-Body">
      {rows.map(row => (
        <ListenerContainer styles={styles[row.id]} row={row} />
      ))}
    </div>
  );
}

export default MainBody;
