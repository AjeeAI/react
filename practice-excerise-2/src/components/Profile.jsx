import profilePic from "../assets/profile1.jpeg";

function Profile(){

    return (
        <div className="profile">
            <img src={profilePic} alt="Profile" />
            <h2>Adesoji Ajijolaoluwa David</h2>
            <h3>AI Developer</h3>
            <p>I am a dedicated programmer who uses his knowledge to tackle real world problems.</p>
        </div>
    );
}

export default Profile;