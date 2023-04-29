import {BrowserRouter, Routes, Route} from "react-router-dom"
import { lazy } from "react";
import './App.css';

// import Home from "./components/home";
// import Galary from "./components/galary";
// import Error from "./components/error";
 import Nav from "./components/nav"

const Home = lazy(()=> import("./components/home"))
const Galary = lazy(()=> import("./components/galary"))
const Error = lazy(()=> import("./components/error"))

function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/galary" element={<Galary />}/>
          <Route path="*" element={<Error />}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
