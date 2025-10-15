import { FaReact, FaPython, FaGithub, FaBrain, FaJavaScript } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";

function Skills() {
  return (
    <section className="skills">
      <h2>My Skills</h2>
      <div className="skill-list">
       <div className="skill">
          <FaJavaScript className="skill-icon" />
          <span>JavaScript</span>
        </div>
        <div className="skill">
          <FaReact className="skill-icon" />
          <span>React</span>
        </div>

        <div className="skill">
          <FaPython className="skill-icon" />
          <span>Python</span>
        </div>

        <div className="skill">
          <SiFastapi className="skill-icon" />
          <span>FastAPI</span>
        </div>

        <div className="skill">
          <FaGithub className="skill-icon" />
          <span>GitHub</span>
        </div>

        <div className="skill">
          <SiFastapi className="skill-icon" />
          <span>FastAPI</span>
        </div>

        <div className="skill">
          <FaBrain className="skill-icon" />
          <span>AI Development</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;

