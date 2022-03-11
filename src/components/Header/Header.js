import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import { menu } from "../../data/menu.js";
import { Dropdown, Menu } from "antd";
import {
  FieldTimeOutlined,
  CloseOutlined,
  MenuOutlined,
  DownOutlined,
} from "@ant-design/icons";
import "./header.scss";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const menu = (
    <Menu className="dropdown-menu">
      <Menu.Item>Races</Menu.Item>
      <Menu.Item>Teams & Drivers</Menu.Item>
    </Menu>
  );

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
          <Dropdown
            overlay={menu}
            className="dropdown"
            trigger={["hover"]}
            placement="bottomRight"
          >
            <div className="ant-dropdown-link">
              Season 2022 <DownOutlined />
            </div>
          </Dropdown>
        </li>
      </ul>
    </div>
  );
};

export default memo(Header);
