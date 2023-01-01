import React from "react";
import photo from "../assets/ma2.png";

const AboutSection = () => {
  return (
    <div className="aboutContainer">
      <section className="aboutLeft">
        <h3>alan</h3>

        <div className="userImgContainer">
          <img src={photo} alt="😁" />
        </div>

        <div>pics | videos </div>
      </section>

      <section className="aboutRight">
        <p className="motto">"great artists steal"</p>

        <div className="info">
          <span id="gender">male</span>
          <span id="age">29</span>
          <span id="location">Riverside, California</span>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
