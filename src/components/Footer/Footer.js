import React, { memo } from "react";
import { GithubOutlined } from "@ant-design/icons";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <hr
        style={{
          color: "red",
          backgroundColor: "red",
          height: 1,
          borderColor: "red",
          marginLeft: "7%",
          marginRight: "7%",
        }}
      />
      <p className="footer-text">© Copyright by AM Industries</p>
      <p className="footer-icon">
        <a href="https://github.com/amarijano">
          <GithubOutlined style={{ color: "white" }} />
        </a>
      </p>
    </div>
  );
};

export default memo(Footer);
