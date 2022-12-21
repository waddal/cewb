import React from "react";

const SkillsSection = () => {
  return (
    <div className="skillsContainer">
      <header>
        <p>Skills</p>
      </header>
      <section className="skillsList">
        <div className="skill languages">
          <span>🌐 Languages: </span>JavaScript, TypeScript, SQL, HTML5, CSS3
        </div>

        <div className="skill frameworks">
          <span>⚙️ Frameworks: </span>React, React Native, Express, Jest,
          Cypress
        </div>

        <div className="skill libraries">
          <span>📚 Libraries: </span>
          React Router, Redux, React Testing Library, PostgreSQL, SQlite,
          Knex.js, JWT, SuperTest, Yup, bcrypt
        </div>

        <div className="skill tools">
          <span>🧰 Tools: </span>
          Git, Visual Studio Code, Chrome/Brave, Postman, pgAdmin, Slack,
          Discord, Zoom
        </div>

        {/* <div className="skill platforms">📀 Platforms: Apple, Windows, iOS</div> */}

        <div className="skill deployments">
          <span>⏫ Deployment: </span>Netlify, Heroku, Vercel, Supabase
        </div>
      </section>
    </div>
  );
};

export default SkillsSection;
