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
                8.95 cgpa
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
        </ul>
        <h3 className="intro">Experience</h3>
        <ul className="details">
          <li>
            <div className="resume-list-item">
              <p style={{ fontSize: "1.5rem", fontWeight: "700" }}>
                Software developer(IT Applications) @ Lexmark International,
                Kolkata
              </p>
              <p style={{ fontSize: "1.2rem", color: "#2ae98d" }}>
                August 2024 - Present
              </p>
              <ul>
                <li>
                  Working as a D365 CRM developer, contributing in the ongoing
                  CRM platform transformation project at Lexmark, developing
                  features for transformation project' MVP delivery to business.
                </li>
                <li>
                  Used React.js to replace the out of the box functionalities
                  for efficient user experience and usability.
                </li>
                <li>
                  Also migrating existing azure functions to .Net8 and other
                  business process automation as per the demand requirements
                </li>
              </ul>
            </div>
          </li>
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
                  <ul>
                    <li>
                      Implementing Spring Security for authentications, Spring
                      websocket for integrated chat application and fixing
                      existing bugs where among my tasks, along with changing
                      the overall website design to make it attractive and
                      interactive.
                    </li>
                    <li>
                      Used many 3rd party packages for better user experience.
                    </li>
                  </ul>
                </li>
                <li>
                  Also worked as a CRM developer, developing solutions on
                  Microsoft Dynamics 365.
                  <ul>
                    <li>
                      This is an inhouse tranformation project, shifting
                      business CRM process from Siebel CRM to Microsoft D365
                      CRM.
                    </li>
                    <li>
                      Used React to extend and implement the frontend
                      capabilites of D365 as per the business requirements,
                      using Fluent UI library as well.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
