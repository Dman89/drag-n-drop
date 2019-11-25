import React from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import "./App.css";
import Header from "./Components/Header";
import SidePanel from "./Components/SidePanel";
import MainBody from "./Components/MainBody";

const data = {
  rows: [
    {
      id: "rowOne",
      components: [
        {
          id: "TestComponent",
          style: {
            color: "red"
          },
          options: {}
        }
      ]
    }
  ],
  styles: {
    rowOne: {
      width: "100px",
      height: "100px"
    }
  },
  components: [
    {
      id: "TestComponent",
      path: require("./TestComponent")
    }
  ]
};

function App() {
  return (
    <div className="App">
      <Header message="Welcome to drag-n-drop" />
      <DndProvider backend={HTML5Backend}>
        <SidePanel />
        <MainBody data={data} />
      </DndProvider>
    </div>
  );
}

export default App;
