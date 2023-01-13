import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ApiSection from "../Views/ApiSection";
import AboutSection from "../Views/AboutSection";
import SkillsSection from "../Views/SkillsSection";
import SocialsSection from "../Views/SocialsSection";
import ProjectsSection from "../Views/ProjectsSection";

function Block() {
  const [rotation, setRotation] = useState(0);
  const [selected, setSelected] = useState("front");
  const [combo, setCombo] = useState(0);
  const left = `0, 1, 0, 90deg`;
  const right = `0, 1, 0, -90deg`;
  const up = `1, 0, 0, 90deg`;
  const down = `0, 0, 0, 0deg`;
  const back = `1, 0, 0, -540deg`;

  const url = useLocation();
  const navigate = useNavigate();

  const handleFront = () => {
    selected === "front" ? setSelected("selected") : setSelected("front");
  };

  function handleRotation(address) {
    if (address === "/back") setRotation(back);
    if (address === "/social") setRotation(left);
    if (address === "/skills") setRotation(right);
    if (address === "/projects") setRotation(up);
    if (address === "/") setRotation(down);
  }

  function comboBreak() {
    setRotation(`1, 0, 0, -495deg`);
    setCombo(0);
  }

  useEffect(() => {
    if (rotation === left) {
      setCombo(1);
      return;
    }
    if (combo === 1 && rotation === right) {
      setCombo(2);
      return;
    }
    if (combo === 2 && rotation === up) {
      setCombo(3);
      return;
    }
    if (combo === 3 && rotation === down) {
      setCombo(4);
      comboBreak();
      return;
    }
    setCombo(0);
  }, [rotation]);

  useEffect(() => {
    handleRotation(url.pathname);
  }, [url]);

  return (
    <div className="container">
      <div className="box" id="box" style={{ "--rotation": `${rotation}` }}>
        {/* FRONT */}
        <div onClick={handleFront} className={`card`} id={`${selected}`}>
          {selected === "selected" ? "🏠" : <AboutSection />}
        </div>

        {/* BACK */}
        <div className="card" id="back">
          <div className="back">
            <button onClick={() => navigate("/back")}>backtivate</button>
            <ApiSection />
          </div>
        </div>

        {/* LEFT */}
        <div className="card" id="left">
          <SocialsSection />
        </div>

        {/* RIGHT */}
        <div className="card" id="right">
          <SkillsSection />
        </div>

        {/* TOP */}
        <div className="card" id="top">
          top
        </div>

        {/* BOTTOM */}
        <div className="card" id="bottom">
          <ProjectsSection />
        </div>
      </div>

      <div className="arrowControlsX">
        <div className="arrow" onMouseEnter={() => navigate("/social")}>
          👈
        </div>
        <div className="arrow" onMouseEnter={() => navigate("/skills")}>
          👉
        </div>
      </div>
      <div className="arrowControlsY">
        <div className="arrow" onMouseEnter={() => navigate("/projects")}>
          🙌
        </div>
        <div className="arrow" onMouseEnter={() => navigate("/")}>
          🙏
        </div>
      </div>
    </div>
  );
}

export default Block;
