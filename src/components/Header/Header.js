import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FieldTimeOutlined,
  CloseOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import "./header.scss";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  function toogles() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("drop").classList.toggle("act");
  }

  window.onclick = function (e) {
    if (!e.target.matches(".drop")) {
      let myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains("show")) {
        myDropdown.classList.remove("show");
        document.getElementById("drop").classList.remove("act");
      }
    }
  };

  return (
    <div className="header-wrapper">
      <Link to="/homepage">
        <h1 className="header-logo">
          F1 Timer
          <i className="timer-logo-header">
            <FieldTimeOutlined className="timer-icon" />
          </i>
        </h1>
      </Link>

      <div className="menu-icon" onClick={handleClick}>
        <i>
          {click ? (
            <CloseOutlined className="menu-close" />
          ) : (
            <MenuOutlined className="menu-open" />
          )}
        </i>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <div className="dropdown">
            <div className="drop" id="drop" onClick={toogles}>
              Season 2022
            </div>
            <div className="dropdown-content" id="myDropdown">
              <Link to="/races">Races</Link>
              <Link to="/season2022">Teams & Drivers</Link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default memo(Header);
