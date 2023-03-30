import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Homepage, Setup, GameInPlay } from "./pages";
import { HashRouter, Routes, Route } from "react-router-dom";



const App = () => {

  return (
    <div className="App">

      <h1>Spades Companion App</h1>
      <hr />
      <HashRouter>
        <Routes>
          <Route
            path="/" 
            element={<Homepage/>}/>
          <Route path="/Setup"
            element={<Setup/>} 
          />
          <Route path="/GameInPlay" 
            element={<GameInPlay/>} 
          />
        </Routes>
      </HashRouter>
    </div>
   
  );
};

export default App;
