import { useState } from "react";
import "./SimpleCounter.css";

function SimpleCounter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="counter-container">
      <div className="counter-card">
        <h1 className="counter-title">Simple Counter</h1>
        <p className="counter-display">{count}</p>
        <div className="button-group">
          <button className="btn btn-decrement" onClick={decrement}>−</button>
          <button className="btn btn-reset" onClick={reset}>Reset</button>
          <button className="btn btn-increment" onClick={increment}>+</button>
        </div>
      </div>
    </div>
  );
}

export default SimpleCounter;
