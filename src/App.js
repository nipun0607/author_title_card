// import logo from './logo.svg';
// import './App.css';
import Card from "./Component/Card/Card.js";
import Header from "./Component/Header/Header.js";
import Data from './Component/Data.json'
import Footer from './Component/Footer/Footer.js'


function App() {
  return (
    <div className="container">

    <Header/>
    {Data.map((e)=>{
      return <Card title={e.title} author={e.author}  />
    })}
    <Footer/>


    </div>

  );
}

export default App;
