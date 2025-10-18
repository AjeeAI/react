function ProfileCard(props){
    return (
        <div className="profile">
            <h2>{props.name}</h2>
            <p>{props.message}</p>
            <p>{props.color}</p>
        </div>
    )
}

export default ProfileCard;