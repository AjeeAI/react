import { useState } from "react";
function SimpleCounter(){
const [count, setCount] = useState(0);

function increment(){
    setCount(prevCount => prevCount +1);
}

function decrement(){
    if (count > 0){

        setCount(prevCount => prevCount - 1);
    }
}

function reset(){
    setCount(0);
}
return (

    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
);

}

export default SimpleCounter;