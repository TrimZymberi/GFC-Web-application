import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import Home from "./Home";
import Cart from "./Cart";

function App() {
  return (
    <div className="App">
      
      <NavbarComp/>
      <Home/>
    </div>
  );
}

export default App;
