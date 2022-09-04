import React from 'react'
let count=0;
export default function() {
    function addPara(){
        count++;
        if(count %2 ==1){
        const para = document.getElementById("para").innerText = "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
        }
        else{
           const para = document.getElementById("para").innerText = ""
        }
      }
  return (
    <div>
      <p id='para'></p>
      <button id="click" onClick={addPara}>Button</button>
    </div>
  )
}
