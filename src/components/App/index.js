import React from "react";
import logo from "./logo.svg";
import  CommentDefault  from "../Comment"
import "./style.css";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src = { logo } className="App-logo" alt="logo" />

          <CommentDefault zohiogch = "ДОРЖ"/>
   
        </header>
      </div>
  );
}

export default App;
