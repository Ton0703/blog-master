import React, { useEffect, useState } from "react";
import Top from "../../img/backTop";
import "./index.scss";

function BackTop() {
  const [visible, setVisible] = useState(false);
  const handleScroll = () => {
    const top = document.documentElement.scrollTop;
    top > 400 ? setVisible(true) : setVisible(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    document.documentElement.scrollTop = 0;
  };
  return (
    <div
      className="backTop"
      style={{ opacity: visible ? "1" : "0" }}
      onClick={handleClick}
    >
      <Top />
    </div>
  );
}

export default BackTop;
