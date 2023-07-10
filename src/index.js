import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return (
    <img
      className="avatar"
      src="data:image/jpeg;base64,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"
      alt="avathar"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1> Rahul R </h1>
      <p>
        hy i m Rahul im a full stack developer now i am focusing more on react{" "}
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list ">
      {skills.map((data, index) => (
        <Skill
          skill={data.skill}
          level={data.level}
          color={data.color}
          key={index}
        />
      ))}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
