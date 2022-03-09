import React, { memo } from "react";
import { useState } from "react";
import { menu } from "../../data/menu.js";
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
  return (
    <div className="header-wrapper">
      <h1 className="header-logo">
        F1 Timer
        <i className="timer-logo-header">
          <FieldTimeOutlined className="timer-icon" />
        </i>
      </h1>

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
        {menu.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default memo(Header);
