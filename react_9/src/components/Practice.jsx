import { useState } from "react";

export default function Practice(){

    const [name, setName] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        console.log(name);
        
    }
    return (
       <div>
         <form onSubmit={handleSubmit}>
            <input 
            value={name}
            onChange={(e) => setName(e.target.value)}/>

            <button>Submit</button>
        </form>

        <div>{name}</div>
       </div>
    );
}

