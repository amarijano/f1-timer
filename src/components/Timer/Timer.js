import React, { memo, useState, useEffect } from "react";
import { Row, Col } from "antd";
import { useDataContext } from "src/context";
import "./Timer.scss";

const Timer = () => {
  const { raceStart, startDate, screenWidth } = useDataContext();

  const calculateTimeLeft = () => {
    const currentTime = Date.now();
    const timeDiff = Date.parse(raceStart) - currentTime;
    let timeLeft = {};
    if (timeDiff > 0) {
      timeLeft = {
        DAYS: Math.floor(timeDiff / 1000 / 60 / 60 / 24),
        HOURS: Math.floor((timeDiff / 1000 / 60 / 60) % 24),
        MINUTES: Math.floor((timeDiff / 1000 / 60) % 60),
        SECONDS: Math.floor((timeDiff / 1000) % 60),
      };
    } else {
      timeLeft = undefined;
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  });

  const raceInfo = {
    startHour: startDate.getHours(),
    startMin:
      startDate.getMinutes() === 0
        ? "0" + startDate.getMinutes()
        : startDate.getMinutes(),
    startDay: startDate.toLocaleString("en-us", { weekday: "long" }),
    startMonth: startDate.toLocaleString("en-us", { month: "long" }),
    startDate: startDate.getDate(),
  };

  return (
    <div className="timer-bar">
      {
        <Row
          span={24}
          gutter={screenWidth > 520 ? 64 : 28}
          style={{ display: "flex", justifyContent: "center" }}
        >
          {timeLeft &&
            Object.keys(timeLeft).map((el, index) => (
              <Col span={6} key={index}>
                <Row className="numbers">{timeLeft[el]}</Row>
                <Row>{el}</Row>
              </Col>
            ))}
          {!timeLeft && (
            <div>
              <h2>RACE IN PROGRESS</h2>
              <br />
              <h3>Timer for next race available soon!</h3>
            </div>
          )}
        </Row>
      }
      {timeLeft && (
        <p className="timer-info">
          Lights out at {raceInfo.startHour}:{raceInfo.startMin} on{" "}
          {raceInfo.startDay}, {raceInfo.startMonth} {raceInfo.startDate}
        </p>
      )}
    </div>
  );
};

export default memo(Timer);
