import React, { useState } from "react";

function App() {
  const [selected, setSelected] = useState("front");
  const style = document.documentElement.style;
  const degree = document.getElementById('degree');

  const handleFront = () => {
    selected === "front" ? setSelected("selected") : setSelected("front");
  };

  const valueChange = (id, value) => {
    style.setProperty("--" + id, value);
  }

  degree.addEventListener('input', function(e) { 
    valueChange(e.currentTarget.id, e.currentTarget.value + 'deg');
  });

  return (
    <div className="container">
      <div className="box" >
        <div onClick={handleFront} className={`card`} id={`${selected}`}>
          🖕
        </div>
        <div className="card" id="back">
          back
        </div>
        <div className="card" id="left">
          left
        </div>
        <div className="card" id="right">
          right
        </div>
        <div className="card" id="top">
          top
        </div>
        <div className="card" id="bottom">
          bottom
        </div>
      </div>

    </div>
  );
}

export default App;
