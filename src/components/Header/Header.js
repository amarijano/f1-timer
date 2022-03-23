import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import {
  CloseOutlined,
  FieldTimeOutlined,
  MenuOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";
import { useDataContext } from "src/context";
import "./header.scss";

const Header = () => {
  const { screenWidth } = useDataContext();
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      {screenWidth < 769 && (
        <div className="header-wrapper">
          <div className="header-left-menu">
            <i className="menu-icon" onClick={handleClick}>
              {click ? <CloseOutlined /> : <MenuOutlined />}
            </i>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li>
                <Link to="/races">Races</Link>
              </li>
              <li>
                <Link to="/season2022">Teams & Drivers</Link>
              </li>
              <li>
                <a href="https://github.com/amarijano">About</a>
              </li>
            </ul>
          </div>

          <Link to="/homepage">
            <i className="timer-logo-header">
              <FieldTimeOutlined className="timer-icon" />
            </i>
          </Link>

          <div className="header-right-menu">
            <Avatar size={64} icon={<UserOutlined />} />
          </div>
        </div>
      )}
      {screenWidth > 768 && (
        <div className="header-wrapper">
          <div className="header-left-menu">
            <Link to="/races">Races</Link>
            <Link to="/season2022">Teams & Drivers</Link>
          </div>

          <Link to="/homepage">
            <i className="timer-logo-header">
              <FieldTimeOutlined className="timer-icon" />
            </i>
          </Link>

          <div className="header-right-menu">
            <Avatar size={64} icon={<UserOutlined />} />
          </div>
        </div>
      )}
    </>
  );
};

export default memo(Header);
