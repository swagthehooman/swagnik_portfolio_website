import "./profileCard.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Card() {
  return (
    <div className="card-main">
      <div className="card-title">
        <p className="logo">Swagnik</p>
        <p className="title">Software developer</p>
      </div>
      <img
        src="./assets/images/profile_pic.jpg"
        alt="Display picture"
        className="profile-image"
      />
      <div className="card-info">
        <p>college student</p>
        <p>From Patna, Bihar</p>
        <p>swagnikdas1@gmail.com</p>
      </div>
      <div className="social-links">
        <a
          className="social-icons"
          href="https://github.com/swagthehooman"
          target="_blank"
        >
          <GitHubIcon className="icons" />
        </a>

        <a
          className="social-icons"
          href="https://www.instagram.com/swagnik_kun/"
          target="_blank"
        >
          <InstagramIcon className="icons" />
        </a>
        <a
          className="social-icons"
          href="https://www.linkedin.com/in/swagnikdas/"
          target="_blank"
        >
          <LinkedInIcon className="icons" />
        </a>
        <button className="social-icons">
          <TwitterIcon className="icons" />
        </button>
      </div>
      <div>
        <a
          className="contacts-button"
          href="mailto:swagnikdas1@gmail.com?subject=Hire me"
          target="_blank"
        >
          <MailOutlineIcon /> <p>Hire me</p>
        </a>
      </div>
    </div>
  );
}
