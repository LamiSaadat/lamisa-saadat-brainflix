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
          <Link to="/">
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
          <Link to="/upload">
            <button className="nav-right__upload-btn">Upload</button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
