import { useState, useEffect } from "react";
import "./TitleUpdater.css"
export default function TitleUpdater() {
  const [name, setName] = useState("");

  useEffect(() => {
    document.title =  name !== ""? name: "Title";
  }, [name]);

  function handleSubmit(e) {
    e.preventDefault();
    
  }

  function reset(){
    setName("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Update title"
        />
        <button type="submit">Submit</button>
        <button onClick={reset}>Reset</button>
      </form>
    </div>
  );
}
