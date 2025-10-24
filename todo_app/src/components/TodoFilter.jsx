import "../App.css";

function TodoFilter({ current, onChange }) {
  const filters = ["All", "Active", "Completed"];

  return (
    <div className="filter-group">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          className={`filter-button ${
            current === f ? "active-filter" : ""
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

export default TodoFilter;
