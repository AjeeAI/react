import { useState } from "react";

export default function SignUpForm(){
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    function validateEmail(value){
        if (!value) {
            setEmailError("Email is required");

        } else if (!/\S+@\S+\.\S+/.test(value)){
            setEmailError("Email is invalid");
        } else {
            setEmailError("");
        }
    }
    function handleEmailChange(e){
        const value = e.target.value;
        setEmail(value);
        validateEmail(value);
    }

    return (
        <div>
            <input 
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter email"
            />
            {emailError && <p style={{color: "red"}}>{emailError}</p>}
            {!emailError && email && <p style={{color: "green"}}>Valid Email</p>}
        </div>
    )
}