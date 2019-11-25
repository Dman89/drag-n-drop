import React, { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import "./App.css";
import { observe } from "./Functions";
import Header from "./Components/Header";
import SidePanel from "./Components/SidePanel";
import MainBody from "./Components/MainBody";

import data from "./ExampleData";

function App() {
  const [appData, setAppData] = useState(data);
  useEffect(() => observe(newData => setAppData(newData)));

  return (
    <div className="App">
      <Header message="Welcome to drag-n-drop" />
      <DndProvider backend={HTML5Backend}>
        <SidePanel components={appData.components} />
        <MainBody data={appData} />
      </DndProvider>
    </div>
  );
}

export default App;
