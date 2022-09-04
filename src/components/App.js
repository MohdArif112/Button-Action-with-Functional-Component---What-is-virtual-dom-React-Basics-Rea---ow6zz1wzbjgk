import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  function addPara(){
    const para = document.getElementById("para").innerText = "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
  }
  return (
    <div id="main">
      
      <p id="para"></p>
      <button id="click" onClick={addPara}>Button</button>
    </div>
  );
}


export default App;
