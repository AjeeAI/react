import { useState } from "react";

function NameInput (){
    const [name, setName] = useState('');

    return (
        <div>
            <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            
            />
            <p>
                Your name is: {name}
            </p>
        </div>
    )
}



function Form(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div>
            <input
            placeholder="firstName"
            value={firstName}
            onChange={(e)=> setFirstName(e.target.value)}/>
            <input 
            placeholder="Last Name"
            value = {lastName}
            onChange={(e)=> setLastName(e.target.value)}
            />
            <input
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>

            <p>FullName: {firstName} {lastName}</p>
            <p>Email: {email}</p>
        </div>
    );
}

export {NameInput, Form};
// export default Form;