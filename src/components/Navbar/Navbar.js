import "./navbar.scss";
import { useSize } from "../../hooks";
import { Menu } from "../Menu";
import {
  FieldTimeOutlined,
  CloseOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { Button } from "../Button/Button";
import React, { Component } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const width = useSize();
  const handleLogin = () => {};
  return (
    <nav className="navbar-items">
      <h1 className="navbar-logo">
        F1 Timer
        <i className="timer-logo-navbar">
          <FieldTimeOutlined className="timer-icon" />
        </i>
      </h1>

      {/* <div className="links">
        {width > 762 ? (
          <>
            <a href="/login" onClick={handleLogin}>
              Log in
            </a>
            <a href="/register">Register</a>
          </>
        ) : (
          <>
            <p>manj</p>
          </>
        )}
      </div> */}
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
        {Menu.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <Button>Sign up</Button>
    </nav>
  );
};

export default Navbar;
