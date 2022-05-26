import "./NavBar.scss";

function NavBar(props) {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-left">
          <a href="/">
            <img
              className="nav-left__logo"
              src={props.logo}
              alt="Brainflix logo"
            ></img>
          </a>
        </div>
        <div className="nav-right">
          <input
            className="nav-right__search-input"
            type="text"
            placeholder="Search"
          ></input>
          <img
            className="nav-right__icon"
            src={props.icon}
            alt="user icon"
          ></img>
          <button className="nav-right__upload-btn">Upload</button>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
