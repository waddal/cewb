import React, { useState } from "react";

function App() {
  const [rotation, setRotation] = useState(0);
  const [content, setContent] = useState("🏠");

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
          {selected === "front" ? (
            content
          ) : (
            <div className="aboutContainer">
              <header>who r u?</header>
              <section>hi im a monkey oo oo ah aha</section>
            </div>
          )}
        </div>
        <div className="card" id="back">
          back
        </div>
        <div className="card" id="left">
          socials
        </div>
        <div className="card" id="right">
          skills
        </div>
        <div className="card" id="top">
          top
        </div>
        <div className="card" id="bottom">
          <div className="projectsContainer">
            <header>
              <p>Projects</p>
            </header>
            <section className="projectsList">
              <div className="projectItem">RLxP</div>
              <div className="projectItem">EcoBoss</div>
              <div className="projectItem">GottLove</div>
            </section>
          </div>
        </div>
      </div>

      <div className="arrowControlsX">
        <div
          className="arrow"
          onMouseEnter={() => handleRotate(`0, 1, 0, 90deg`)}
        >
          👈
        </div>
        <div
          className="arrow"
          onMouseEnter={() => handleRotate(`0, 1, 0, -90deg`)}
        >
          👉
        </div>
      </div>
      <div className="arrowControlsY">
        <div
          className="arrow"
          onMouseEnter={() => handleRotate(`1, 0, 0, 90deg`)}
        >
          🙌
        </div>
        <div
          className="arrow"
          onMouseEnter={() => handleRotate(`0, 0, 0, 0deg`)}
        >
          🙏
        </div>
      </div>
    </div>
  );
}

export default App;
