import { useState } from "react";

export default function ProfileForm(){
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        gender: "",
        city: "Lagos",
        bio: ""

    });

    function handleChange(e){
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log("Profile data:", formData);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
            <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            />
            </div>

            <div>
                <label>Age:</label>
                <input 
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                />
            </div>
            <div>
                <label>Gender:</label>
                <label>
                    <input 
                    type="radio"
                    name="gender"
                    value="male"
                    checked= {formData.gender === "male"}
                    onChange={handleChange}
                    />
                    Male
                </label>

                <label>
                    <input 
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                    />
                    Female
                </label>
            </div>

            <div>
                <label>City:</label>
                <select name="city" value={formData.city} onChange={handleChange}>
                    <option value="Lagos">Lagos</option>
                    <option value="Abuja">Abuja</option>
                    <option value="Port Harcourt">Port Harcourt</option>
                    <option value="Kano">Kano</option>
                </select>
            </div>
            <div>
                <label>Bio:</label>
                <textarea 
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows="4"
                />

            </div>
            <button type="submit">Save Profile</button>
        </form>
    )
}