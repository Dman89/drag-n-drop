import React from "react";
import "./index.css";

function Header({ message }) {
  return (
    <header className="App-Header">
      <div className="Header-Content">{message}</div>
    </header>
  );
}

export default Header;
