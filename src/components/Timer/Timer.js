import React, { memo, useState, useEffect } from "react";
import { Row, Col } from "antd";
import "./Timer.scss";

const Timer = () => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const raceStart = date + "T" + time;
  const startDate = new Date(Date.parse(raceStart));

  async function getSchedule() {
    const response = await fetch("http://ergast.com/api/f1/2022.json");
    response
      .json()
      .then((data) => {
        console.log("data fetched");
        setDate(data.MRData.RaceTable.Races[0].date);
        setTime(data.MRData.RaceTable.Races[0].time);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getSchedule();
  }, []);

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
    <div className="timer-Bar">
      {
        <Row
          span={24}
          gutter={64}
          style={{ display: "flex", justifyContent: "center" }}
        >
          {Object.keys(timeLeft).map((el, index) => (
            <Col span={6} key={index}>
              <Row
                className="numbers"
                style={{ fontSize: "80px", color: "rgb(225, 6, 0)" }}
              >
                {timeLeft[el]}
              </Row>
              <Row>{el}</Row>
            </Col>
          ))}
        </Row>
      }
      <p style={{ paddingTop: "50px", justifyContent: "center" }}>
        Lights out at {raceInfo.startHour}:{raceInfo.startMin} on{" "}
        {raceInfo.startDay}, {raceInfo.startMonth} {raceInfo.startDate}
      </p>
    </div>
  );
};

export default memo(Timer);
