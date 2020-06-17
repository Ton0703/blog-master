import React, { useState, useRef, useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";
import DarkModeToggle from "../theme/DarkModeToggle";
//import useOnClickOutside from "use-onclickoutside";
import Logo from "../../img/logo";
import SearchLogo from "../../img/search";
import "./index.scss";

function Header() {
  const ref = useRef(null);
  const history = useHistory();
  const location = useLocation()
  const [visible, set] = useState(false);
  const [search, setSearch] = useState(false);
  const [key, setKey] = useState("");

  //useOnClickOutside(ref, () => set(false));

  const handleClick = () => {
    set(!visible);
  };
  const handleClose = () => {
    set(false);
  };

  const handleJump = () => {
    history.push("/");
  };

  const fetchData = useCallback(() => {
    const url = location.search ==='' ? `?key=${key}` : (location.search.includes('key') ? `${location.search.substr(0, location.search.indexOf('key'))}key=${key}` : `${location.search}&key=${key}`)
    history.push(key !== "" && url);
    setKey("");
    setSearch(false);
    set(false)
  }, [key, history, location.search]);

  const handleButtonClick = (e) => {
    e.preventDefault();
    if (search !== true) {
      setSearch(true);
    } else {
      fetchData();
    }
  };

  const handlePress = (e) => {
    if (e.key === "Enter") {
      fetchData();
    }
  };

  const handleAdminClick = () => {
    history.push('/admin')
  }

  return (
    <div className="header">
      <div className="logo-container" onClick={handleJump}>
        <Logo />
      </div>
      <div
        className={`bg ${visible ? "show" : ""}`}
        onClick={handleClose}
      ></div>
      <div ref={ref} className={`menu-container ${visible ? "active" : ""}`}>
        <div className="search">
          <input
            type="text"
            className={`${search ? "search" : ""}`}
            value={key}
            onChange={(e) => setKey(e.target.value)}
            onKeyPress={handlePress}
            //onBlur={handleBlur}
          />
          <div
            className={`search-btn ${search ? "searchbtn" : ""}`}
            onClick={handleButtonClick}
          >
            <SearchLogo />
          </div>
        </div>
        <div className="link-menu">
          <ul>
            <li className="menu-item" onClick={handleAdminClick}>Admin</li>
            <li className="menu-item">Login</li>
            <li className="menu-item">Github</li>
          </ul>
        </div>
        <DarkModeToggle />
      </div>
      <div className={`header-button ${visible ? "close" : ""}`} onClick={handleClick}>
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </div>
    </div>
  );
}

export default Header;
