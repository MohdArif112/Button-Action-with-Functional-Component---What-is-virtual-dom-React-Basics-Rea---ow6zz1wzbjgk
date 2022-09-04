import { useState } from "react";
import "./styles.css";

export default function App() {
  const [bool, setBool] = useState(false);

  const handleDisplay = () => {
    setBool(true);
  };
  return (
    <div className="main">
      <button id="click" onClick={handleDisplay}>
        Display
      </button>
      {bool && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      )}
    </div>
  );
}
