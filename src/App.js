import React from "react";
import "./App.css";
import Header from "./Components/Header";
import SidePanel from "./Components/SidePanel";
import MainBody from "./Components/MainBody";

function App() {
  return (
    <div className="App">
      <Header message="Welcome to drag-n-drop" />
      <SidePanel />
      <MainBody />
    </div>
  );
}

export default App;
