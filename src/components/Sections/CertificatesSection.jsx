import ViewListIcon from "@mui/icons-material/ViewList";
export default function CertificatesSection() {
  return (
    <section id="certificates">
      <div className="container-wrapper">
        <button className="heading">
          <ViewListIcon />
          Certificates
        </button>
        <h3>Certifications:</h3>

        <div className="projects">
          <div className="project-tile">
            <p
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                margin: "2rem 0 1rem 0",
              }}
            >
              HackerRank Java Basic Certificate
            </p>
            <a
              href="https://www.hackerrank.com/certificates/e55160546fc8"
              target="_blank"
            >
              <img
                className="project_pic"
                style={{ width: "90%" }}
                src="../assets/images/java_certificate.png"
              />
            </a>
          </div>
          <div className="project-tile">
            <p
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                margin: "5rem 0 1rem 0",
              }}
            >
              HackerRank Problem Solving Basic Certificate
            </p>
            <a
              href="https://www.hackerrank.com/certificates/2a7b788b8cf0"
              target="_blank"
            >
              <img
                className="project_pic"
                style={{ width: "90%" }}
                src="../assets/images/problem_solving_certificate.png"
              />
            </a>
          </div>
          <div className="project-tile">
            <p
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                margin: "5rem 0 1rem 0",
              }}
            >
              HackerRank SQL Certificate
            </p>
            <a
              href="https://www.hackerrank.com/certificates/3190e0e40d99"
              target="_blank"
            >
              <img
                className="project_pic"
                style={{ width: "90%" }}
                src="../assets/images/sql_certificate.png"
              />
            </a>
          </div>
          <div className="project-tile">
            <p
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                margin: "5rem 0 1rem 0",
              }}
            >
              Cisco Cybersecurity Essentials Certificate
            </p>
            <a
              href="https://www.credly.com/badges/a5855c73-7ed2-49f2-acc9-b7c07a81d68e/public_url"
              target="_blank"
            >
              <img
                className="project_pic"
                style={{ width: "90%" }}
                src="../assets/images/cybersecurity_essentials_certificate.png"
              />
            </a>
          </div>
          <div className="project-tile">
            <p
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                margin: "5rem 0 1rem 0",
              }}
            >
              Cisco CCNAv7: Introduction to Networking Certificate
            </p>
            <a
              href="https://www.credly.com/badges/9a98ffda-ef6c-4336-bc17-bd1eb288653d/public_url"
              target="_blank"
            >
              <img
                className="project_pic"
                style={{ width: "90%" }}
                src="../assets/images/ccna_certificate.png"
              />
            </a>
          </div>
          <div className="project-tile">
            <p
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                margin: "5rem 0 1rem 0",
              }}
            >
              LinkedIn Learning Python Essential Training Certificate
            </p>
            <a
              href="https://www.linkedin.com/learning/certificates/cfb44b7a683b5f8fb2008066fbeb2589eaf8537cb45df3f153b46132190eeb8e"
              target="_blank"
            >
              <img
                className="project_pic"
                style={{ width: "90%" }}
                src="../assets/images/LinkedIn_python_certificate.png"
              />
            </a>
          </div>
          <div className="project-tile">
            <p
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                margin: "5rem 0 1rem 0",
              }}
            >
              AWS Academy Introduction to Cloud Certificate
            </p>
            <a
              href="https://www.credly.com/badges/4c399bca-5ce8-4e55-b7f6-edb39a205d80/public_url"
              target="_blank"
            >
              <img
                className="project_pic"
                style={{ width: "90%" }}
                src="../assets/images/aws_certificate.png"
              />
            </a>
          </div>
          <div className="project-tile">
            <p
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                margin: "5rem 0 1rem 0",
              }}
            >
              Language & Communication Proficiency Course in Spanish
            </p>
            <img
              className="project_pic"
              style={{ width: "90%" }}
              src="../assets/images/espanol_certificate.png"
            />
          </div>
        </div>
        {/* <div className="skill-row">
            <div className="skill-item">
              <img src="../assets/images/java_certificate.png" />
            </div>
          </div> */}
        {/* <ul>
            <li>Hackerrank problem solving basics</li>
            <li>Hackerrank sql basics</li>
            <li>Hackerrank java basics</li>
            <li>Python essential training</li>
            <li>AWS academy graduate</li>
            <li>Introduction to cybersecurity</li>
            <li>CCNA: Introduction to Networks</li>
            <li>Language & communication proficiency course in Spanish</li>
          </ul> */}
      </div>
    </section>
  );
}
