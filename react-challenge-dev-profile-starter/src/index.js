import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar name="Nick Whitfield" avatarPicture="aragorn.jpeg" />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <div>
      <img src={props.avatarPicture} className="avatar" alt={props.name} />
      <div>
        <h1>{props.name}</h1>
      </div>
    </div>
  );
}

function Intro() {
  return (
    <body className="body">
      My name is Nick and I am a Software Engineer for the NSA. I am passionate
      about storytelling in multiple forms of media.
    </body>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skills) => (
        <Skill
          skillColor={skills.color}
          skillLevel={skills.level}
          skill={skills.skill}
        />
      ))}
    </div>
  );
}

function Skill({ skill, skillLevel, skillColor }) {
  return (
    <div className="skill" style={{ backgroundColor: skillColor }}>
      <span>{skill}</span>
      <span>
        {skillLevel === "beginner" && "👶"}
        {skillLevel === "intermediate" && "👍"}
        {skillLevel === "advanced" && "💪"}
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
