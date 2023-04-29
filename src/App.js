import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Home from "./components/home";
import Galary from "./components/galary";
import Error from "./components/error";
import Nav from "./components/nav"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/galary" element={<Galary />}/>
          <Route path="/error" element={<Error />}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
