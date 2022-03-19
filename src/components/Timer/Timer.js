import React, { memo, useState, useEffect } from "react";
import { Row, Col } from "antd";
import "./Timer.scss";
import { useDataContext } from "src/context";

const Timer = () => {
  const { raceStart, startDate, screenWidth } = useDataContext();
  // const [screenWidth, setScreenWidth] = useState();

  // useEffect(() => {
  //   const width = useSize();
  //   setScreenWidth(width);
  // }, []);
  // console.log(screenWidth);
  //console.log(startDate.getTimezoneOffset() / 60);
  //console.log(startDate);
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
          {Object.keys(timeLeft).map((el, index) => (
            <Col span={6} key={index}>
              <Row className="numbers">{timeLeft[el]}</Row>
              <Row>{el}</Row>
            </Col>
          ))}
        </Row>
      }
      <p className="timer-info">
        Lights out at {raceInfo.startHour}:{raceInfo.startMin} on{" "}
        {raceInfo.startDay}, {raceInfo.startMonth} {raceInfo.startDate}
      </p>
    </div>
  );
};

export default memo(Timer);
