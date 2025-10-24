import { useState } from "react";

function Parent(){
    const [count, setCount] = useState(0);

    return (
        <div>
            <ComponentA count={count} />
            <ComponentB count={count} />
            <button onClick={()=> setCount(count + 1)}>Increment</button>
        </div>
    );
}

function ComponentA({count}){
    return <div>Component A: {count}</div>
}

function ComponentB({count}){
    return <div>Component B: {count}</div>
}

export {Parent, ComponentA, ComponentB};