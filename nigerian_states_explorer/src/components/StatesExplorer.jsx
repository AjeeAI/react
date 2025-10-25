import React, { useState } from "react";

function StatesExplorer() {
  const allStates = [
    { name: "Lagos", capital: "Ikeja", region: "South West" },
    { name: "Kano", capital: "Kano", region: "North West" },
    { name: "Rivers", capital: "Port Harcourt", region: "South South" },
    { name: "Enugu", capital: "Enugu", region: "South East" },
    { name: "Kaduna", capital: "Kaduna", region: "North West" },
    { name: "Oyo", capital: "Ibadan", region: "South West" },
    { name: "Plateau", capital: "Jos", region: "North Central" },
    { name: "Borno", capital: "Maiduguri", region: "North East" },
    { name: "Delta", capital: "Asaba", region: "South South" },
    { name: "Anambra", capital: "Awka", region: "South East" }
  ];

  const [states, setStates] = useState(allStates);

  function filterStates(e) {
    const query = e.target.value.toLowerCase();

    const filtered = allStates.filter(
      (state) =>
        state.name.toLowerCase().includes(query) ||
        state.capital.toLowerCase().includes(query)
    );

    setStates(filtered);
  }

  return (
    <div>
      <div className="header-div">
        <h2>Nigerian States Explorer</h2>
      <input
        placeholder="Search states by name or capital"
        type="text"
        onChange={filterStates}
        style={{
          padding: "8px",
          width: "300px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
      </div>
      <StateDisplay states={states} />
    </div>
  );
}

function StateDisplay({ states }) {
  if (states.length === 0) {
    return <p>No matching state found.</p>;
  }

  return (
    <div className="stateList">
      {states.map((state) => (
        <div key={state.name} className="state-card">
          <p><strong>State:</strong> {state.name}</p>
          <p><strong>Capital:</strong> {state.capital}</p>
          <p><strong>Region:</strong> {state.region}</p>
        </div>
      ))}
    </div>
  );
}

export default StatesExplorer;
