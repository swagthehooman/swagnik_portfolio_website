import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"; //home
export default function IntroSection() {
  return (
    <section id="home">
      <div className="container-wrapper">
        <button className="heading">
          <HomeOutlinedIcon />
          Introduction
        </button>
        <h3 className="intro">
          Hii, I'm <span>Swagnik Das</span>, A Software developer.
        </h3>
        <p className="details">
          I'm seeking a role in software development field to enhance and
          implement my skills in a collaborative and growing environment.
        </p>
        <p className="details">
          Currently, I'm working as a Software developer at Lexmark
          International, Kolkata, working with different tech stacks like
          React.js, Azure functions and D365 CRM platform. I can contribute to a
          full stack projects, with my latest practical knowledge in the field,
          as per the requirements.
        </p>
        <a
          href="https://drive.google.com/file/d/13vj_cWxYUxAoLtNUKEFM0EyX5636lcO7/view?usp=sharing"
          target="_blank"
        >
          <button id="project-button">Resume</button>
        </a>
      </div>
    </section>
  );
}
