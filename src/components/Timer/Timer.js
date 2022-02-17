import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import "./Timer.scss";

const Timer = () => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  async function getSchedule() {
    const response = await fetch("http://ergast.com/api/f1/2022.json");
    response
      .json()
      .then((data) => {
        setDate(data.MRData.RaceTable.Races[0].date);
        setTime(data.MRData.RaceTable.Races[0].time);
      })
      .catch((err) => console.log(err));
  }
  getSchedule();

  const calculateTimeLeft = () => {
    const raceStart = date + "T" + time;
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

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    /*if (!timeLeft[interval]) {
      return;
    }*/

    timerComponents.push(
      <span className="num">
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="timer-Bar">
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
};

export default Timer;
