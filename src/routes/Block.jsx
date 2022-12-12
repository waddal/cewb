import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Block({ face }) {
  const [rotation, setRotation] = useState(0);
  const [selected, setSelected] = useState("front");
  const [combo, setCombo] = useState(0);
  const left = `0, 1, 0, 90deg`;
  const right = `0, 1, 0, -90deg`;
  const up = `1, 0, 0, 90deg`;
  const down = `0, 0, 0, 0deg`;

  // how do we handle url/face switches?
  // 1. set rotation then 'navigate' to corresponding url
  // 2. navigate to url then rotate cube according to url   <---

  const url = useLocation();
  const navigate = useNavigate();

  const handleFront = () => {
    selected === "front" ? setSelected("selected") : setSelected("front");
  };

  // function handleRotate(rot) {
  //   setRotation(rot);
  //   if (rot === left) navigate("/social");
  //   if (rot === right) navigate("/skills");
  //   if (rot === up) navigate("/projects");
  //   if (rot === down) navigate("/");
  // }

  function handleRotation(address) {
    console.log("rotating to address.. ", address);
    if (address === "/social") setRotation(left);
    if (address === "/skills") setRotation(right);
    if (address === "/projects") setRotation(up);
    if (address === "/") setRotation(down);
  }

  function comboBreak() {
    console.log("combo!");
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
    console.log("face: ", face);
    handleRotation(url.pathname);
  }, [url]);

  return (
    <div className="container">
      <div className="box" id="box" style={{ "--rotation": `${rotation}` }}>
        <div onClick={handleFront} className={`card`} id={`${selected}`}>
          {selected === "front" ? (
            "🏠"
          ) : (
            <div className="aboutContainer">
              <header>hello</header>
              <section>🙆‍♂️</section>
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
          <div className="skillsContainer">
            <header>
              <p>Skills</p>
            </header>
            <section className="skillsList">
              <div>🌐 Languages: JavaScript, TypeScript, SQL, HTML5, CSS3</div>

              <div>
                ⚙️ Frameworks: React, React Native, Express, Jest, Cypress
              </div>

              <div>
                📚 Libraries: React Router, Redux, React Testing Library,
                PostgreSQL, SQlite, Knex.js, JWT, SuperTest, Yup, bcrypt
              </div>

              <div>
                🧰 Tools: Git, Visual Studio Code, Chrome/Brave, Postman,
                pgAdmin, Slack, Discord, Zoom
              </div>

              <div>📀 Platforms: Apple, Windows, iOS</div>

              <div>⏫ Deployment: Netlify, Heroku, Vercel, Supabase</div>
            </section>
          </div>
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
        {/* <div className="arrow" onMouseEnter={() => handleRotate(left)}> */}
        <div className="arrow" onMouseEnter={() => navigate("/social")}>
          👈
        </div>
        {/* <div className="arrow" onMouseEnter={() => handleRotate(right)}> */}
        <div className="arrow" onMouseEnter={() => navigate("/skills")}>
          👉
        </div>
      </div>
      <div className="arrowControlsY">
        {/* <div className="arrow" onMouseEnter={() => handleRotate(up)}> */}
        <div className="arrow" onMouseEnter={() => navigate("/projects")}>
          🙌
        </div>
        {/* <div className="arrow" onMouseEnter={() => handleRotate(down)}> */}
        <div className="arrow" onMouseEnter={() => navigate("/")}>
          🙏
        </div>
      </div>
    </div>
  );
}

export default Block;
