import ProductCard from "./components/ProductCard";
import "./App.css";
function App(){
  return (
    <div className="App">
      <ProductCard
      name = "Wireless Headphones"
      price = {"150,000"}
      image = "https://imgs.search.brave.com/3Ce0Wqzql4kC3MrrTU2OCCa5QGJjRd98_fLS4lOHUCQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzMwL0FLR19DMjE0/X2NvbmRlbnNlcl9t/aWNyb3Bob25lX3dp/dGhfSDg1X3Nob2Nr/X21vdW50LmpwZw"
      inStock={true}
      />

       <ProductCard
      name = "Scarlett Focusrite"
      price = {"500,000"}
      image = "https://imgs.search.brave.com/K46WI2_OnsBU1Sr-L2BdEEkXuj5zQ2uBz8-VJvVr75E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2FtYXNoLmNvbS9t/ZWRpYS93eXNpd3ln/L0ZvY3Vzcml0ZV9T/Y2FybGV0dC0yaTIt/NHRoLUdlbl9SaWdo/dC1FbGV2YXRlZF9E/YXJrQkcuanBn"
      inStock={false}
      />

       <ProductCard
      name = "Tama ImperialStar"
      price = {"750,000"}
      image = "https://imgs.search.brave.com/jBqaFvdF_grtFogvx0yhQjEChToSH4bg2JZ8xLPixYk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cGFsZW5tdXNpYy5j/b20vY2RuL3Nob3Av/ZmlsZXMvVW50aXRs/ZWRkZXNpZ25fMl8x/NDllNzNlOS1mYmI0/LTQzYzktOGY3Mi0y/YzdmMTRhMmUzZWQu/cG5nP3Y9MTY5MzMy/MjU2MSZ3aWR0aD0x/NjAw"
      inStock={true}
      />
    </div>
  );
}

export default App;