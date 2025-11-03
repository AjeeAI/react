import { useState } from "react";

export default function SimpleContactForm (){
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        console.log("Name:", name);
        console.log("Message:", message)

        setName("");
        setMessage("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div>
                <label>Message:</label>
                <textarea 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                />
            </div>

            <button type="submit">Send Message</button>
        </form>
    )
}

