import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined"; //resume
export default function EducationSection() {
  return (
    <section id="resume">
      <div className="container-wrapper">
        <button className="heading">
          <FeedOutlinedIcon />
          Resume
        </button>
        <h3 className="intro">Education</h3>
        <ul className="details">
          <li>
            <div className="resume-list-item">
              <p style={{ fontSize: "1.2rem", color: "#2ae98d" }}>
                2020 - Present
              </p>
              <p style={{ fontSize: "1.5rem", fontWeight: "700" }}>
                Bachelor in Technology, Computer Science & Engineering
              </p>
              <p>Kalinga Institute of Industial Technology, Bhubaneswar.</p>
            </div>
          </li>
          <li>
            <div className="resume-list-item">
              <p style={{ fontSize: "1.2rem", color: "#2ae98d" }}>
                2018 - 2020
              </p>
              <p style={{ fontSize: "1.5rem", fontWeight: "700" }}>
                Intermediate (12th), ISC with 87.2%
              </p>
              <p>Don Bosco Academy, Patna.</p>
            </div>
          </li>
          <li>
            <div className="resume-list-item">
              <p style={{ fontSize: "1.2rem", color: "#2ae98d" }}>
                2016 - 2018
              </p>
              <p style={{ fontSize: "1.5rem", fontWeight: "700" }}>
                Matriculate (10th), ICSE with 88.3%
              </p>
              <p>Don Bosco Academy, Patna.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
