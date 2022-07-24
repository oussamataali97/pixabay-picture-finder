import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import InvalidPages from "./components/InvalidPages";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <>

    <div className="app">
<Navbar/>
    <Search/>

  <Footer/>
    </div>
 
    </>
  );
}

export default App;
