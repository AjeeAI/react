import "./SkillBadge.css";

function SkillBadge({ skills, level }) {
  return (
    <div className="skills">
        <h2>Skills</h2>
      <ul className="cards">
        {skills.map((skill, index) => (
          <li key={index} className={`skill-card ${level[index]}`}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillBadge;
