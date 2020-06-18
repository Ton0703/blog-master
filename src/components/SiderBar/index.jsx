import React, { useState } from "react";
import "./index.scss";
import Catalog from "../Catalog";

const list = ["React", "Node", "JavaScript", "CSS"];

function Sider() {
  const [visible, set] = useState(false);
  const handleClick = (e) => {
    e.stopPropagation();
    set(!visible);
  };

  const handleClose = () => {
    set(false);
  };

  return (
    <div>
      <div className={`sider ${visible ? "active" : ""}`}>
        {list.map((item, index) => (
          <Catalog topic={item} key={index} />
        ))}
      </div>
      <div
        className={`sider-bg ${visible ? "show" : ""}`}
        onClick={handleClose}
      ></div>
      <button className="sider-btn" onClick={handleClick}>
        <div className="line" onClick={handleClick}></div>
      </button>
    </div>
  );
}

export default Sider;
