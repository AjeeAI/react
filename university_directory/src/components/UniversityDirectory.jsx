import React, { useEffect, useState } from "react";
import "./University.css";

const UniversityDirectory = () => {
  const [universities, setUniversities] = useState([]);
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await fetch(
          "http://universities.hipolabs.com/search?country=Nigeria"
        );
        if (!response.ok) throw new Error("Failed to fetch universities");
        const data = await response.json();
        const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
        setUniversities(sortedData);
        setFilteredUniversities(sortedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUniversities();
  }, []);

  useEffect(() => {
    const filtered = universities.filter((uni) =>
      uni.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUniversities(filtered);
  }, [searchTerm, universities]);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="university-container">
      <h2>🎓 Nigerian Universities</h2>

      <div className="search-bar">
        <label>
          Search:{" "}
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Type to filter..."
          />
        </label>
      </div>

      <p className="count">Showing {filteredUniversities.length} universities</p>

      {filteredUniversities.length === 0 ? (
        <p className="no-results">No universities found.</p>
      ) : (
        <ul className="university-list">
          {filteredUniversities.map((uni) => (
  <li key={uni.name + (uni["state-province"] || uni.alpha_two_code)}>
    <strong>{uni.name}</strong>
    <br />
    {uni["state-province"] || "N/A"}
    <br />
    <a href={uni.web_pages[0]} target="_blank" rel="noopener noreferrer">
      🔗 {uni.web_pages[0]}
    </a>
  </li>
))}

        </ul>
      )}
    </div>
  );
};

export default UniversityDirectory;
