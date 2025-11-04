import { useEffect, useState } from "react";
import "./RandomUser.css"; 
export default function RandomUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchUser() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://corsproxy.io/?https://randomuser.me/api/");
      if (!response.ok) throw new Error("Failed to fetch user");

      const data = await response.json();
      const result = data.results[0];

      const userData = {
        name: `${result.name.title} ${result.name.first} ${result.name.last}`,
        email: result.email,
        phone: result.phone,
        location: `${result.location.city}, ${result.location.country}`,
        picture: result.picture.large,
      };

      setUser(userData);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading)
    return (
      <div className="container">
        <div className="loader"></div>
        <p className="loading-text">Fetching user...</p>
      </div>
    );

  if (error)
    return (
      <div className="container">
        <p className="error-text">⚠️ {error}</p>
        <button className="button" onClick={fetchUser}>
          Try Again
        </button>
      </div>
    );

  return (
    <div className="container">
      <div className="card">
        <img src={user.picture} alt={user.name} className="avatar" />
        <h2 className="name">{user.name}</h2>
        <p className="info"><strong>Email:</strong> {user.email}</p>
        <p className="info"><strong>Phone:</strong> {user.phone}</p>
        <p className="info"><strong>Location:</strong> {user.location}</p>
        <button className="button" onClick={fetchUser}>Get New User</button>
      </div>
    </div>
  );
}
