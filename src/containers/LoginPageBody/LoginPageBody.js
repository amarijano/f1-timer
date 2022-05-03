import React, { memo, useState } from "react";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import "./loginPageBody.scss";

const LoginPageBody = () => {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "Username is invalid",
    pass: "Password is invalid",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    let { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <span className="prefix">
            <UserOutlined style={{ color: "grey" }} className="user-icon" />
          </span>
          <input
            placeholder="Username"
            type="text"
            name="uname"
            autoComplete="off"
            required
          />
        </div>
        {renderErrorMessage("uname")}
        <div className="input-container">
          <span className="prefix">
            <LockOutlined style={{ color: "grey" }} />
          </span>
          <input
            placeholder="Password"
            type="password"
            name="pass"
            autoComplete="off"
            required
          />
        </div>
        {renderErrorMessage("pass")}
        <div className="form-reg">
          <label for="remember" className="check-label">
            Remember me
          </label>
          <input type="checkbox" name="remember" className="check" />
          <Link to="/recoverPassword">
            <span className="forgot">Forgot Password</span>
          </Link>
        </div>
        <div className="button-container">
          <input type="submit" value={"Log in"} />
        </div>
        <div className="reg">
          <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default memo(LoginPageBody);
