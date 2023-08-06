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
          Hii, I'm <span>Swagnik Das</span>, A fresher software developer.
        </h3>
        <p className="details">
          I'm a student, seeking a role in software development field to enhance
          and implement my skills in a collaborative working environment.
        </p>
        <p className="details">
          I love to create and code beautiful and simple designs. I can
          contribute to a full stack web project and frontend flutter project,
          as per the requirements.
        </p>
        <a
          href="https://drive.google.com/file/d/1Rrh_0TA4HSMWw7-zzkduSUM15sxzBRTH/view?usp=sharing"
          target="_blank"
        >
          <button id="project-button">Resume</button>
        </a>
      </div>
    </section>
  );
}
