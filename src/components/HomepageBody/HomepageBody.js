import React, { memo } from "react";
import { FieldTimeOutlined } from "@ant-design/icons";
import Timer from "../../components/Timer/Timer";
import "./HomepageBody.scss";

const HomepageBody = () => {
  return (
    <div className="content-wrapper">
      <h1 className="title">
        F1 TIMER
        <i className="timer-logo">
          <FieldTimeOutlined style={{ fontSize: "7rem" }} />
        </i>
      </h1>
      <h2 className="race-name">FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2022</h2>
      <Timer />
    </div>
  );
};

export default memo(HomepageBody);
