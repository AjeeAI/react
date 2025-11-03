import { useState } from "react";

export default function LoginForm(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");

    function validate(){
        const newErrors = {};

        if (!email){
            newErrors.email = "Email is required";

        } else if(!/\S+@\S+\.\S+/.test(email)){
            newErrors.email = "Email is invalid"
        }

        if (!password){
            newErrors.password = "Password is required";

        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }
        return newErrors;
    }

    function handleSubmit(e){
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0){
            setErrors(validationErrors);
        } else {
            setErrors({});
            console.log("Form is valid!");
            console.log("Email:", email);
            console.log("Paasword:", password)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            </div>

            {errors.email && <p style={{color: "red"}}>{errors.email}</p>}

            <div>
                <label>Password:</label>
                <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p style={{color: "red"}}> {errors.password}</p>}
            </div>
            <button type="submit">Login</button>
        </form>
    )
}