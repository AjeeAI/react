import Header from "./components/Header.jsx"
import Content from "./components/Content.jsx"
import Footer from "./components/Footer.jsx"

function App(){
  return (
    <div className="container">
      <Header/>
      <Content className="content"/>
      <Footer/>
    </div>
  );
}

export default App;