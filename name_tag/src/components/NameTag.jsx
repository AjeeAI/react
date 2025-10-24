import { useState } from "react";
import "./NameTag.css"
function NameTag(){
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [showPopUp, setShowPopUp] = useState(false);
     function downloadAlert(){
            return <div>
                {name}
                {title}
                {company}
            </div>
        }
    // function handleNameInput(e){
    //     enteredName = e.target.value;
    //     setName(enteredName);
    // }

    // function handleTitleInput(){
    //     enteredTitle = e.target.value;
    //     setTitle(enteredTitle);
    // }

    // function handleCompanyInput(){
    //     enteredCompany = e.target.value;
    //     setCompany(enteredCompany);
    // }

    return (
        <div className="container">
            <div className="input-group">
                <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}/>
            
                <input
                type="text"
                placeholder="Enter your title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}/>
            

            
                <input
                type="text"
                placeholder="Enter your company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}/>
            </div>

        <div className="name-tag">
            <div className="display-text">
                <h2>Name:</h2>
                <p>{name}</p>
            </div>
            <div className="display-text">
                <h2>Title:</h2>
                <p>{title}</p>
            </div>
            <div className="display-text">
                <h2>Company:</h2>
                <p>{company}</p>
            </div>

            
            
        </div>
       
        <button onClick={()=> alert(`${name}`)}>
            Download
        </button>


        <div className="popup">
                <div className="display-text">
                <h2>Name:</h2>
                <p>{name}</p>
            </div>
            <div className="display-text">
                <h2>Title:</h2>
                <p>{title}</p>
            </div>
            <div className="display-text">
                <h2>Company:</h2>
                <p>{company}</p>
            </div>
            </div>
    </div>
    );
}

export default NameTag;