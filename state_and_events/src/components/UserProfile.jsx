import { useState } from "react";

function UserProfile(){
    const [user, setUser] = useState({
        name: "Chidi",
        age: 25,
        city: "Lagos"
    });

    function updateCity(){
        setUser({
            ...user,
            city: "Abuja"
        });
    }

    return (
        <div>
            <div>
                
                {user.name}
                {user.age}
                {user.city}
            </div>
            <button onClick={updateCity}>Move to Abuja</button>
        </div>
    );
}

export default UserProfile;