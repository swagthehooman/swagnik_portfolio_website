import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"; //about
export default function AboutSection() {
  return (
    <section id="about">
      <div className="container-wrapper">
        <button className="heading">
          <PersonOutlineOutlinedIcon />
          About
        </button>
        <h3 className="intro">A bit about me,</h3>
        <p className="details">
          I'm from Patna, Bihar and I'm currently pursuing a degree in B.Tech
          from{" "}
          <a href="https://kiit.ac.in/" target="_blank">
            KIIT University, Bhubaneswar
          </a>
          . Scrolling through all these mobile apps and websites created a spark
          in me to create these awesome apps since 2018. So, I started my
          journey in software development field, learning programming languages,
          new frameworks and new concepts in engineering.
        </p>
        <p className="details">
          {" "}
          My favorite way to spend time is listening to music, playing guitar or
          read books.
        </p>
      </div>
    </section>
  );
}
