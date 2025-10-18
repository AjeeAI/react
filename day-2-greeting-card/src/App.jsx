import GreetingCard  from "./components/GreetingCard";
import "./App.css";
function App(){
  return (
    <div className="App">
      <GreetingCard

        name="Ajee"
        message="Hello Ajee!"
        // color="aliceblue"
      />
      <GreetingCard

        name="Ajee's Birthday"
        message="Happy Birthday!"
        color="lightblue"
      />

      <GreetingCard

        name="Goodbye Card"
        message="Goodbye Ajee!"
        color="blue"
      />
    </div>
  );
}

export default App;