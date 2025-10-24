import { useState } from "react";

function Parent (){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    function handleFormSubmit (formData){
        setFirstName(formData.firstName);
        setLastName(formData.lastName);
        setEmail(formData.email);

    }
    return (
        <div>
            <h2>User Info:</h2>
            <p>{firstName}  {lastName}</p>
            <p>{email}</p>

            <UserForm onSubmit = {handleFormSubmit}/>
        </div>
    );
}

function UserForm({onSubmit}){
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    function handleChange(e){
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        onSubmit(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}/>

            <input 
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}/>

            <input
            name = "email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}/>

            <button type="submit">Submit</button>
        </form>
    );
}

export {Parent, UserForm};

