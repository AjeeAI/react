function UserCard({ name, email, location }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{location}</p>
        </div>
    )
}

export default UserCard;