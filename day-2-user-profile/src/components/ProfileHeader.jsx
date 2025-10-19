import "./ProfileHeader.css";

function ProfileHeader({name, title, avatar}){
    return (
        <div className="profile">
            <img src={avatar} alt={name}/>

            <div className="profile-text">
                <h3>{name}</h3>
                <p>{title}</p>
            </div>
        </div>
    );
}

export default ProfileHeader;