import React, {Component, useState} from "react";
import "./../styles/App.css";

let count =0;
function App() {
  function addPara(){
    count++;a
    if(count %2 ==1){
    const para = document.getElementById("para").innerText = "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    }
    else{
       const para = document.getElementById("para").innerText = ""
    }
  }
  return (
    <div id="main">
      
      <p id="para"></p>
      <button id="click" onClick={addPara}>Button</button>
    </div>
  );
}


export default App;
