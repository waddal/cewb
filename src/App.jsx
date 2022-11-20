import React, { useEffect, useState } from "react";

function App() {
  const [angle, setAngle] = useState(0);
  const [rotation, setRotation] = useState(0);
  // const inlineStyle = { "--degree": `${90 + angle}deg` };

  const [selected, setSelected] = useState("front");
  const handleFront = () => {
    selected === "front" ? setSelected("selected") : setSelected("front");
  };

  /*
  const style = document.documentElement.style;
  const degree = document.getElementById("degree");

  const valueChange = (id, value) => {
    style.setProperty("--" + id, value);
  };

  degree.addEventListener("input", function (e) {
    valueChange(e.currentTarget.id, e.currentTarget.value + "deg");
  });
  */

  // const body = document.querySelector("body");
  // const rekt = body.getBoundingClientRect();
  // const anchorX = rekt.left + rekt.width / 2;
  // const anchorY = rekt.top + rekt.height / 2;

  // function atangle(cx, cy, ex, ey) {
  //   const dy = ey - cy;
  //   const dx = ex - cx;
  //   const rad = Math.atan2(dy, dx);
  //   const deg = (rad * 180) / Math.PI;
  //   return deg;
  // }

  // document.addEventListener("mousedown", function (e) {
  //   const mouseX = e.clientX;
  //   const mouseY = e.clientY;

  //   const angleDeg = atangle(mouseX, mouseY, anchorX, anchorY);

  //   // const box = document.querySelector('box');
  //   // box.style.transform = `rotate(${90 + angleDeg}deg)`;
  //   // this throws ^ cannot read null

  //   setAngle(angleDeg / 2);
  // });

  function handleRotate(rot) {
    setRotation(rot);
    console.log(rotation);
  }

  // useEffect(() => {
  //   console.log(angle);
  // }, [angle]);

  return (
    <div className="container">
      <div className="box" id="box" style={{ "--rotation": `${rotation}` }}>
        {/* <div className="box" id="box" style={{ "--degree": `${angle}deg` }}> */}
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
