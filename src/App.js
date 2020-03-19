import React from "react";
import logo from "./logo.svg";
import { MyCoolButton } from "./components/MyCoolButton";
import { Comment } from "./components/Comment"
import "./App.css";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src = { logo } className="App-logo" alt="logo" />

          <Comment zohiogch = "ДОРЖ"/>
   
        </header>
      </div>
  );
}

export default App;
