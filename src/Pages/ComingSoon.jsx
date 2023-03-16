import React from "react";
import { useState, useEffect } from "react";
const ComingSoon = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "Martch, 20, 2023";
  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="comingSoon">
        <h1>COMING SOON</h1>
        <a href="">Bizimlə əlaqə saxlayın</a>
        <div className="timer">
          <div className="box">
            <p id="day">{days < 10 ? "0" + days : days}</p>
            <span className="text">Day</span>
          </div>

          <div className="box">
            <p id="hour">{hours < 10 ? "0" + hours : hours}</p>
            <span className="text">Hour</span>
          </div>

          <div className="box">
            <p id="minute">{minutes < 10 ? "0" + minutes : minutes}</p>
            <span className="text">Min</span>
          </div>

          <div className="box">
            <p id="second">{seconds < 10 ? "0" + seconds : seconds}</p>
            <span className="text">Sec</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
