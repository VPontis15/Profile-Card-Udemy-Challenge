import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
      <Skill emoji="💪" name="HTML" color="red" />
      <Skill emoji="👌" name="CSS" color="blue" />
      <Skill emoji="👍" name="Javascript" color="yellow" />
      <Skill emoji="✌" name="React" color="orangered" />
      <Skill emoji="💪" name="Git and Github" color="black" />
      <Skill emoji="💯" name="Web Design" color="green" />
      <Skill emoji="🎉" name="Figa" color="orange" />
    </div>
  );
}

function Skill(props) {
  return (
    <div style={{ backgroundColor: props.color }} className="skill">
      <p className="skill__name">{props.name}</p>
      <span>{props.emoji}</span>
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
