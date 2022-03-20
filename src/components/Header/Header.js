import React, { memo } from "react";
import { Link } from "react-router-dom";
import { FieldTimeOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import "./header.scss";
import { useDataContext } from "src/context";

const Header = () => {
  const { screenWidth } = useDataContext();
  return (
    <>
      {screenWidth < 769 && (
        <div className="header-wrapper">
          <Link to="/homepage">
            <i className="timer-logo-header">
              <FieldTimeOutlined className="timer-icon" />
            </i>
          </Link>

          <div className="header-left-menu">
            <Link to="/races">Races</Link>
            <Link to="/season2022">Teams & Drivers</Link>
          </div>

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
