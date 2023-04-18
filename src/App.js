import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Homepage, Setup, GameInPlay } from "./pages";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';


const hardcodedGameResults= [
  {
          start: "2023-03-23T17:38:23.230Z"
          , playerOne: "Tom"
          , playerTwo: "Tom"
          , playerThree: "Tom"
          , playerFour: "Tom"
          , winningTeam: "Team 1"
  }
];


const App = () => {

  const [gameresults, setGameResults] = useState(hardcodedGameResults);

  const [setupInfo, setSetupInfo] = useState({
    start: "",
    playerOne: "",
    playerTwo: "",
    playerthree: "",
    playerFour: ""
  });

  return (
    <div className="App">

      <h1>Spades Companion App</h1>
      <hr />
      <HashRouter>
        <Routes>
          <Route
            path="/" 
            element={<Homepage
              gameresults={gameresults}/>}/>
          <Route path="/Setup"
            element={<Setup 
              setSetupInfo={setSetupInfo}/>} 
          />
          <Route path="/GameInPlay" 
            element={<GameInPlay 
              setupInfo={setupInfo}
              setGameResults={setGameResults}
              gameresults={gameresults}/>} 
          />
        </Routes>
      </HashRouter>
    </div>
   
  );
};

export default App;
