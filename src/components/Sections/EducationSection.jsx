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
                2020 - 2024
              </p>
              <p style={{ fontSize: "1.5rem", fontWeight: "700" }}>
                Bachelor in Technology, Computer Science & Engineering, with
                8.88 cgpa
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
        <h3 className="intro">Experience</h3>
        <ul className="details">
          <li>
            <div className="resume-list-item">
              <p style={{ fontSize: "1.5rem", fontWeight: "700" }}>
                Intern @ Lexmark International, Kolkata
              </p>
              <p style={{ fontSize: "1.2rem", color: "#2ae98d" }}>
                September 2023 - June 2024
              </p>
              <ul>
                <li>
                  Worked on an Awarding portal system website, where users can
                  nominate their collegues for awards.
                </li>
                <li>
                  Implementing Spring Security for authentications, Spring
                  websocket for integrated chat application and fixing existing
                  bugs where among my tasks, along with changing the overall
                  website design to make it attractive and interactive.
                </li>
                <li>
                  Used many 3rd party packages for better user experience.
                </li>
                <li>
                  Also worked as a CRM developer, developing solutions on
                  Microsoft Dynamics 365.
                </li>
                <li>
                  My daily activities included assisting team members on their
                  respective sprint features, learning about customizations in
                  D365 and building solutions for the business.
                </li>
                <li>
                  Used React to extend and implement the frontend capabilites of
                  D365 as per the business requirements, using Fluent UI library
                  as well.
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
