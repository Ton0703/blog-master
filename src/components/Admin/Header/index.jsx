import React from "react";
import Switch from "../../../img/switch";
import "./index.scss";

function Header({ set, visible }) {
  const handleClick = () => {
    set(!visible);
  };
  return (
    <div className="admin-header">
      <div
        className={`switch-btn ${visible ? "on" : ""}`}
        onClick={handleClick}
      >
        <Switch />
      </div>
    </div>
  );
}

export default Header;
