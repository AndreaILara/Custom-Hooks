import React from "react";
import "./Timer.css";

const Timer = ({ currentTime }) => {
  return (
    <div className="timer">
      <h2>Hora actual</h2>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>

  );
};

export default Timer;
