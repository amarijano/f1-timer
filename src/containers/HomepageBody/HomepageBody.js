import React, { memo } from "react";
import { FieldTimeOutlined } from "@ant-design/icons";
import Timer from "../../components/Timer/Timer";
import { useDataContext } from "src/context";
import "./homepageBody.scss";

const HomepageBody = () => {
  const { isScheduleLoading, nextRaceName } = useDataContext();

  return (
    <div className="content-wrapper">
      <h1 className="title">
        F1 TIMER{" "}
        <i className="timer-logo">
          <FieldTimeOutlined className="timer-logo-icon" />
        </i>
      </h1>
      {isScheduleLoading && <div className="loader" />}
      {!isScheduleLoading && (
        <>
          <h2 className="race-name">FORMULA 1 {nextRaceName}</h2>
          <Timer />
        </>
      )}
    </div>
  );
};

export default memo(HomepageBody);
