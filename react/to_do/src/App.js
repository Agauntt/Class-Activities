import React from "react";
import "./App.css";
import Todos from "./components/Todos";

function App() {
  state = {
    todos: [
      {
        id: 1,
        title: "take out the trash"
      }
    ]
  };
  return (
    <div className="App">
      <h1>App</h1>
      <Todos />
    </div>
  );
}

export default App;
