import { useState } from "react";

function Parent(){
    const [name, setName] = useState("");

    function handleNameChange(newName){
        setName(newName);

    }

    return(
        <div>
            <p>Name in Parent: {name}</p>
            <Child onNameChange = {handleNameChange}/>
        </div>
    );
}

function Child({onNameChange}){
    const [inputValue, setInputValue] = useState("");
    function handleSubmit(){
        onNameChange(inputValue);

    }
    return (
        <div>
            <input 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleSubmit}>Send to Parent</button>
        </div>
    );
}

export {Parent, Child};
