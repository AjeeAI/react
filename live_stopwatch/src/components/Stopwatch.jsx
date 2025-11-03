import { useEffect, useState } from "react";
import "./StopWatch.css"
function StopWatch() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState("00:00");
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSec) => {
          if (prevSec + 1 === 60) {
            // rollover to next minute
            setMinutes(minutes + 1);
            return 0;
          }
          return prevSec + 1;
        });
      }, 1000);
    }

    // cleanup on pause/unmount
    return () => clearInterval(interval);
  }, [isRunning]);

  // your formatting logic moved here — outside of rendering
  useEffect(() => {
    let displayMinutes = minutes;
    let displaySeconds = seconds;

    if (displayMinutes < 10) {
      displayMinutes = `0${displayMinutes}`;
    }
    if (displaySeconds < 10) {
      displaySeconds = `0${displaySeconds}`;
    }

    setTime(`${displayMinutes}:${displaySeconds}`);
  }, [minutes, seconds]);

  function start() {
    setIsRunning(true);
  }

  function pause() {
    setIsRunning(false);
  }

  function reset() {
    setIsRunning(false);
    setMinutes(0);
    setSeconds(0);
  }

  return (
    <div className="timer-container">
      <div className="time">
        <p >{time}</p>
      </div>
      <div className="buttons">
        <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default StopWatch;
