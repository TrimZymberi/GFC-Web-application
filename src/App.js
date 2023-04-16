import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import Menu from "./Components/Menu";


function App() {
  return (
    <div className="App">
      
      <NavbarComp/>
      <Menu/>
    </div>
  );
}

export default App;
