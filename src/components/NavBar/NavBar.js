import "./NavBar.scss";
import icon from "../../assets/images/Mohan-muruge.jpg";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-left">
          {/* changed a tags to Link tags */}
          <Link to="/" className="link">
            <img
              className="nav-left__logo"
              src={logo}
              alt="Brainflix logo"
            ></img>
          </Link>
        </div>
        <div className="nav-right">
          <input
            className="nav-right__search-input"
            type="text"
            placeholder="Search"
          ></input>
          <img className="nav-right__icon" src={icon} alt="user icon"></img>
          <div className="nav-right__upload-btn">
            <Link to="/upload" className="link">
              Upload
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
