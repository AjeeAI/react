import StateCard from "./components/StateCard.jsx";
import "./App.css";
function App(){
  return (
      <div className="App">
        <StateCard
      state = {"Katsina State"}
      capital = {"Katsina"}
      region = {"North"}
      population = {"9,300,382"}
      >
        Nil
      </StateCard>

      <StateCard
      state = {"Oyo state"}
      capital = {"Ibadan"}
      region = {"South"}
      population = {"7,512,855"}
      >
        Nil
        </StateCard>

      <StateCard
      state = {"Anambra"}
      capital = {"Awka"}
      region = {"East"}
      population = {"5,599,910"}>
Nil
        </StateCard>

      <StateCard
      state = {"Lagos State"}
      capital = {"Ikeja"}
      region = {"West"}
      population = {"15,772,884"}>
        Bar Beach
        </StateCard>
      </div>
  );
}

export default App;