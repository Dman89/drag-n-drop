import React from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import "./App.css";
import Header from "./Components/Header";
import SidePanel from "./Components/SidePanel";
import MainBody from "./Components/MainBody";

function App() {
  return (
    <div className="App">
      <Header message="Welcome to drag-n-drop" />
      <DndProvider backend={HTML5Backend}>
        <SidePanel />
        <MainBody />
      </DndProvider>
    </div>
  );
}

export default App;
