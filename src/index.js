import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    name: "HTML",
    level: "advanced",
    color: "red",
  },
  {
    name: "CSS",
    level: "advanced",
    color: "blue",
  },
  {
    name: "Javascript",
    level: "intermidiate",
    color: "yellow",
  },
  {
    name: "React",
    level: "beginner",
    color: "orangered",
  },
  {
    name: "Git and Github",
    level: "intermidiate",
    color: "black",
  },
  {
    name: "Figma",
    level: "beginner",
    color: "orange",
    emoji: "",
  },
  {
    name: "Web Design",
    level: "intermidiate",
    color: "green",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <Content />
      <Skills />
    </div>
  );
}

function Avatar() {
  return (
    <img className="avatar" src="images/michelle.jpg" alt="Michelle Klaus" />
  );
}

function Content() {
  return (
    <div className="text-content">
      <h1 className="name">Michelle Klaus</h1>
      <p className="summary">
        A passionate developer currently learning React. I love building web
        applications that following the best principles for the best user
        experience possible.I am always eager to learn new things!!!
      </p>
    </div>
  );
}

function Skills() {
  return (
    <div className="skills">
      {skills.map((skill) => {
        return <Skill skillObj={skill} key={skill.name} />;
      })}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <div style={{ backgroundColor: skillObj.color }} className="skill">
      <p className="skill__name">{skillObj.name}</p>
      <span>
        {skillObj.level === "beginner"
          ? "👶"
          : skillObj.level === "intermidiate"
          ? "👊"
          : "💪"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
