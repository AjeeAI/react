import { useState, useEffect } from "react";
import "./CountdownTimer.css"
export default function CountdownTimer() {
 
  const [targetDate, setTargetDate] = useState(new Date("October 1, 2025 00:00:00"));
  const [timeLeft, setTimeLeft] = useState({});
  const [eventStarted, setEventStarted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        setEventStarted(true);
        setTimeLeft({});
        clearInterval(timer);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

 
    return () => clearInterval(timer);
  }, [targetDate]);

  function handleDateChange(e) {
    const newDate = new Date(e.target.value);
    if (newDate > new Date()) {
      setTargetDate(newDate);
      setEventStarted(false);
    } else {
      alert("Please select a future date.");
    }
  }

  return (
    <div className="container">
      <h1>🎉 Countdown to Independence Day</h1>
      <div className="timer-container">
        {eventStarted ? (
          <h2>Event Started!</h2>
        ) : (
          <h2 className="time">
            {timeLeft.days} Days : {timeLeft.hours} Hours :{" "}
            {timeLeft.minutes} Minutes : {timeLeft.seconds} Seconds
          </h2>
        )}
        <p>{targetDate.toDateString()}</p>

        <div className="date-input">
          <label>Set Custom Date: </label>
          <input
            type="datetime-local"
            onChange={handleDateChange}
            className="input"
          />
        </div>
      </div>
    </div>
  );
}
