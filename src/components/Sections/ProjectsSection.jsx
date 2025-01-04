import ApprovalOutlinedIcon from "@mui/icons-material/ApprovalOutlined"; //certificates
export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="container-wrapper">
        <button className="heading">
          <ApprovalOutlinedIcon />
          portfolio
        </button>
        <h3>My Projects:</h3>
        <div className="projects">
          <div className="project_tile">
            <div className="intro_div">
              <p
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                }}
              >
                Awards and Recognitions Portal (Lexmark)
              </p>
            </div>
            <img
              className="project_pic"
              src="../assets/images/awardingportalPoster.jpg"
            ></img>
          </div>
          <div className="project_tile">
            <div className="intro_div">
              <p
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                }}
              >
                Country Glossary
              </p>
              <a
                className="contacts-button"
                href="https://github.com/swagthehooman/country-glossary"
                target="_blank"
              >
                <p>Github</p>
              </a>
              <a
                className="contacts-button"
                href="https://country-glossary-swagthehoomans-projects.vercel.app/"
                target="_blank"
              >
                <p>Live site</p>
              </a>
            </div>
            <img
              className="project_pic"
              src="../assets/images/countryGlossaryPoster.jpg"
            ></img>
          </div>
          <div className="project_tile">
            <div className="intro_div">
              <p
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                }}
              >
                Todo List
              </p>
              <a
                className="contacts-button"
                href="https://github.com/swagthehooman/TodoList_MERN"
                target="_blank"
              >
                <p>Github</p>
              </a>
              <a
                className="contacts-button"
                href="https://todolistbyswagnik.netlify.app/"
                target="_blank"
              >
                <p>Live site</p>
              </a>
            </div>
            <img
              className="project_pic"
              src="../assets/images/todoListPoster.png"
            ></img>
          </div>
          <div className="project_tile">
            <div className="intro_div">
              <p
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                }}
              >
                Quiz Web App
              </p>
              <a
                className="contacts-button"
                href="https://github.com/swagthehooman/Quiz_webapp"
                target="_blank"
              >
                <p>Github</p>
              </a>
              <a
                className="contacts-button"
                href="https://swagnik-quiz-webapp.netlify.app/"
                target="_blank"
              >
                <p>Live site</p>
              </a>
            </div>
            <img
              className="project_pic"
              src="../assets/images/quizAppPoster.png"
            ></img>
          </div>
          <div className="project_tile">
            <div className="intro_div">
              <p
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                }}
              >
                Advice Generator
              </p>
              <a
                className="contacts-button"
                href="https://github.com/swagthehooman/Advice_generator_FEM"
                target="_blank"
              >
                <p>Github</p>
              </a>
              <a
                className="contacts-button"
                href="https://advicefortheday.netlify.app/"
                target="_blank"
              >
                <p>Live site</p>
              </a>
            </div>
            <img
              className="project_pic"
              src="../assets/images/AdviceApiPoster.png"
            ></img>
          </div>
          <div className="project_tile">
            <div className="intro_div">
              <p
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                }}
              >
                Tic Tac Toe Flutter
              </p>
              <a
                className="contacts-button"
                href="https://github.com/swagthehooman/TictacToeFlutter"
                target="_blank"
              >
                <p>Github</p>
              </a>
            </div>
            <img
              className="project_pic"
              src="../assets/images/ticTacToePoster.png"
            ></img>
          </div>
          <div className="project_tile">
            <div className="intro_div">
              <p
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                }}
              >
                Tip Calculator Web App
              </p>
              <a
                className="contacts-button"
                href="https://github.com/swagthehooman/Tip_calculator_webapp"
                target="_blank"
              >
                <p>Github</p>
              </a>
              <a
                className="contacts-button"
                href="https://tiny-melomakarona-f57bd9.netlify.app/"
                target="_blank"
              >
                <p>Live site</p>
              </a>
            </div>
            <img
              className="project_pic"
              src="../assets/images/TipCalculatorPoster.png"
            ></img>
          </div>

          <div className="project_tile">
            <div className="intro_div">
              <p
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                }}
              >
                Calculator App Flutter
              </p>
              <a
                className="contacts-button"
                href="https://github.com/swagthehooman/calculator_flutter"
                target="_blank"
              >
                <p>Github</p>
              </a>
            </div>
            <img
              className="project_pic"
              src="../assets/images/calculatorPoster.png"
            ></img>
          </div>
        </div>
        {/* <ul>
            <li>Todo web app</li>
            <li>quizzical web app</li>
            <li>Advice generator web app</li>
            <li>Tic tac toe flutter app</li>
            <li>Calculator flutter</li>
            <li>Tip calculator</li>
            <li>Chat app Java</li>
          </ul> */}
      </div>
    </section>
  );
}
