import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Homepage, Setup, GameInPlay } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from './NavBar';


export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <div className="App">
        <Routes>
          <Route path="/" element={ <Homepage />} />
          <Route path="/Setup" element={ <Setup />} />
          <Route path="/GameInPlay" element={ <GameInPlay />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
