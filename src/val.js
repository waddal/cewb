import React, { useEffect, useState } from "react";

function App() {
  const [angle, setAngle] = useState(0);

  const style = document.documentElement.style;
  const degree = document.getElementById("degree");

  const valueChange = (id, value) => {
    style.setProperty("--" + id, value);
  };

  degree.addEventListener("input", function (e) {
    valueChange(e.currentTarget.id, e.currentTarget.value + "deg");
  });

  const body = document.querySelector("body");
  const rekt = body.getBoundingClientRect();
  const anchorX = rekt.left + rekt.width / 2;
  const anchorY = rekt.top + rekt.height / 2;

  function atangle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = (rad * 180) / Math.PI;
    return deg;
  }

  document.addEventListener("mousedown", function (e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const angleDeg = atangle(mouseX, mouseY, anchorX, anchorY);

    // const box = document.querySelector('box');
    // box.style.transform = `rotate(${90 + angleDeg}deg)`;
    // this throws ^ cannot read null

    setAngle(angleDeg / 2);
  });

  useEffect(() => {
    console.log(angle);
  }, [angle]);

  return (
    <div className="container">
      <div className="box" id="box" style={{ "--degree": `${angle}deg` }}>
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

// <!-- <input type="range" id="degree" min="-360" max="360" value="0" /> -->
