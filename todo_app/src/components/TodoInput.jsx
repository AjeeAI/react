import { useState } from "react";
import "../App.css"
function TodoInput({ onAdd }) {
  const [text, setText] = useState("");

  function handleAdd() {
    onAdd(text);
    setText("");
  }

  return (
    <div className="field">
      <input className="input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new todo..."
        
      />
      <button
        onClick={handleAdd}
        className="button"
      >
        Add
      </button>
    </div>
  );
}

export default TodoInput;
