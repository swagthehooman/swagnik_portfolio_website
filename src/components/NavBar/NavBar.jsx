import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"; //home
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"; //about
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined"; //resume
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined"; //services
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined"; //skill
import ApprovalOutlinedIcon from "@mui/icons-material/ApprovalOutlined"; //certificates
import ViewListIcon from "@mui/icons-material/ViewList";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"; //contacts
import "./navbar.css";
export default function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#home" className="nav-button">
            <HomeOutlinedIcon />
          </a>
        </li>
        <li>
          <a href="#about" className="nav-button">
            <PersonOutlineOutlinedIcon />
          </a>
        </li>
        <li>
          <a href="#resume" className="nav-button">
            <FeedOutlinedIcon />
          </a>
        </li>
        <li>
          <a href="#services" className="nav-button">
            <DesignServicesOutlinedIcon />
          </a>
        </li>
        <li>
          <a href="#skill" className="nav-button">
            <ApprovalOutlinedIcon />
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-button">
            <ViewListIcon />
          </a>
        </li>
        <li>
          <a href="#certificates" className="nav-button">
            <ExtensionOutlinedIcon />
          </a>
        </li>
        <li>
          <a href="#contacts" className="nav-button">
            <EmailOutlinedIcon />
          </a>
        </li>
      </ul>
    </nav>
  );
}
