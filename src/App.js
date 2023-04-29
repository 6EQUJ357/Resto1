import {BrowserRouter, Routes, Route} from "react-router-dom"
import { lazy } from "react";
import './App.css';

import Home from "./components/home";
import Galary from "./components/galary";
import Errorr from "./components/error";
 import Nav from "./components/nav"



function App() {
  return (
    <div>
      <h1> home component...</h1>
      <BrowserRouter>
      <Nav/>
      
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/galary" element={<Galary />}/>
         <Route path="*" element ={<Errorr/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
