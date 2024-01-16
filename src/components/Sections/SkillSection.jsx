import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined"; //skill
export default function SkillSection() {
  return (
    <section id="skill">
      <div className="container-wrapper">
        <button className="heading">
          <ExtensionOutlinedIcon />
          Skill
        </button>
        <h3>Technical skills:</h3>
        <div className="skill-row">
          <div className="skill-item">
            <img src="../assets/icons/java_logo.png" />
            <p>Java</p>
          </div>
          <div className="skill-item">
            <img src="../assets/icons/spring.png" />
            <p>Springboot</p>
          </div>
          <div className="skill-item">
            <img src="../assets/icons/html_logo.jpeg" />
            <p>HTML 5</p>
          </div>
          <div className="skill-item">
            <img src="../assets/icons/css_logo.jpeg" />
            <p>CSS 3</p>
          </div>
          <div className="skill-item">
            <img src="../assets/icons/tailwind_logo.png" />
            <p>Tailwind CSS</p>
          </div>
          <div className="skill-item">
            <img src="../assets/icons/javascript_logo.png" />
            <p>JavaScript</p>
          </div>
          <div className="skill-item">
            <img src="../assets/icons/react_logo.png" />
            <p>React</p>
          </div>
          <div className="skill-item">
            <img src="../assets/icons/next_logo.png" />
            <p>Next</p>
          </div>
          <div className="skill-item">
            <img src="../assets/icons/nodejs_logo.png" />
            <p>Node</p>
          </div>
          <div className="skill-item">
            <img src="../assets/icons/flutter_logo.png" />
            <p>Flutter</p>
          </div>
          <div className="skill-item">
            <img src="../assets/icons/figma_logo.png" />
            <p>Figma</p>
          </div>
          <div className="skill-item">
            <img src="../assets/icons/mongodb_logo.png" />
            <p>MongoDB</p>
          </div>
          <div className="skill-item">
            <img src="../assets/icons/postgres_logo.png" />
            <p>PostgreSQL</p>
          </div>
          <div className="skill-item">
            <img src="../assets/icons/mysql_logo.png" />
            <p>MySql</p>
          </div>
          <div className="skill-item">
            <img src="../assets/icons/python_logo.png" />
            <p>Python</p>
          </div>
        </div>
        <div className="soft-skills-grid">
          <div className="skill-grid"></div>
        </div>
      </div>
    </section>
  );
}
