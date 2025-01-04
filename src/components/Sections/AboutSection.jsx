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
          I'm from Patna, Bihar and I'm currently working as a{" "}
          <span style={{ fontSize: "1.2rem", color: "#2ae98d" }}>
            Software developer(IT Applications 1)
          </span>{" "}
          at Lexmark International, Kolkata and have completed my B.Tech degree
          from KIIT University, Bhubaneswar. I have a total of an year of
          experience in the industry, working on and keeping up with the latest
          technologies.
          <br />
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
