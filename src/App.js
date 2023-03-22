import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Homepage, Setup, GameInPlay } from "./pages";
import { HashRouter, Routes, Route } from "react-router-dom";
import { NavBar } from './NavBar';
import { useState } from 'react';



const App = () => {

  return (
    <div className="App">
        <h1>Spades Companion App</h1>
    <HashRouter>
      <NavBar />
        <Routes>
          <Route
            path="/" 
            element={ <Homepage />} />
          <Route path="/Setup" element={ <Setup />} />
          <Route path="/GameInPlay" element={ <GameInPlay />} />
        </Routes>
        </HashRouter>
      </div>
   
  );
};

export default App;
