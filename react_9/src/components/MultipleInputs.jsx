import { useState } from "react";

export default function RegistrationForm(){
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    });

    function handleChange(e){
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log("Form Data:", formData);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
            name="firstName"
            placeholder="FirstName"
            value={formData.firstName}
            onChange={handleChange}
            />
            <input 
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}/>
            <input 
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            />
            <input 
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            />
            <button type="submit">
                Register
            </button>
        </form>
    )
}