import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Homepage, Setup, GameInPlay } from "./pages";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import localforage from 'localforage';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const App = () => {

  // State Hooks

  const [gameresults, setGameResults] = useState([]);

  const [setupInfo, setSetupInfo] = useState({
    start: "",
    playerOne: "",
    playerTwo: "",
    playerthree: "",
    playerFour: ""
  });

  const [emailKey, setEmailKey] = useState("");

  // useEffect hook

  useEffect(
    
    () => {

        const loadEmailKey = async () => {

            try {
                  setEmailKey(
                    await localforage.getItem("emailKey") ?? ""
                  );
            }
            catch (err) {
              console.error(err)
            }
        };

        loadEmailKey();
    }
    , []
  );

  // helper functions

	const saveEmailKey = async () => {
		try {
			await localforage.setItem(
				"emailKey"
				, emailKey
			);
		}
		catch (err) {
			console.error(err);
		}
	};

  return (
    <div className="App">

      <h1>Spades Companion App</h1>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
				<Form.Control 
					type="text" 
					placeholder="Enter Email"
					value={emailKey} 
					onChange={(e) => setEmailKey(e.target.value)}
				/>
        <br />
				<Button
					onClick={saveEmailKey}
				>
					Save
				</Button>
			</Form.Group>
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
