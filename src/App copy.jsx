import React, { useState } from "react";

function App() {
  const [rotation, setRotation] = useState(0);

  const [selected, setSelected] = useState("front");
  const handleFront = () => {
    selected === "front" ? setSelected("selected") : setSelected("front");
  };

  function handleRotate(rot) {
    setRotation(rot);
    console.log(rotation);
  }

  return (
    <div className="container">
      <div className="box" id="box" style={{ "--rotation": `${rotation}` }}>
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
      <div className="Xcontrols">
        <button onClick={() => handleRotate(`0, 1, 0, 180deg`)}>back</button>
        <button onClick={() => handleRotate(`0, 1, 0, 135deg`)}>peek left back</button>
        <button onClick={() => handleRotate(`0, 1, 0, 90deg`)}>left</button>
        <button onClick={() => handleRotate(`0, 1, 0, 45deg`)}>peek left</button>
        <button onClick={() => handleRotate(`0, 1, 0, 0deg`)}>front</button>
        <button onClick={() => handleRotate(`0, 1, 0, -45deg`)}>peek right</button>
        <button onClick={() => handleRotate(`0, 1, 0, -90deg`)}>right</button>
        <button onClick={() => handleRotate(`0, 1, 0, -135deg`)}>peek right back</button>
        <button onClick={() => handleRotate(`0, 1, 0, -180deg`)}>back</button>
      </div>
      <div className="Ycontrols">
        <button onClick={() => handleRotate(`1, 0, 0, -90deg`)}>top</button>
        <button onClick={() => handleRotate(`1, 0, 0, -45deg`)}>peek top</button>
        <button onClick={() => handleRotate(`1, 0, 0, 0deg`)}>center</button>
        <button onClick={() => handleRotate(`1, 0, 0, 45deg`)}>peek bottom</button>
        <button onClick={() => handleRotate(`1, 0, 0, 90deg`)}>bottom</button>
      </div>
    </div>
  );
}

export default App;
