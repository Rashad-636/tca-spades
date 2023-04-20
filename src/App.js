import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Homepage, Setup, GameInPlay } from "./pages";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import localforage from 'localforage';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { saveGameToCloud, loadGamesFromCloud } from './tca-cloud-api';



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

  const [emailKeyInput, setEmailKeyInput] = useState("");
  const [emailKeySaved, setEmailKeySaved] = useState("");


  // useEffect hook

  useEffect(
    
    () => {

        const loadEmailKeyAndGameResults = async () => {

            try {

                const ek = String(await localforage.getItem("emailKey")) ?? "";

                if (ek.length > 0) {

                  const resultsFromCloud = await loadGamesFromCloud(
                    ek
                    , "tca-spades"
                  );

                  if (!ignore) {
                    setGameResults(resultsFromCloud);
                  };

                };

                if (!ignore) {
                setEmailKeyInput(ek);
                setEmailKeySaved(ek);
                };
            }
            catch (err) {
              console.error(err)
            }
        };

        let ignore = false;
        loadEmailKeyAndGameResults();
        return () => {
          ignore = true;
        };
    }
    , [emailKeySaved]
  );

  // helper functions

	const saveEmailKey = async () => {
		try {
			await localforage.setItem(
				"emailKey"
				, emailKeyInput
			);

      setEmailKeySaved(emailKeyInput);

		}
		catch (err) {
			console.error(err);
		}
	};

  const addGameresult = (gameresult) => {

    // Save the game result to the cloud
    saveGameToCloud(
      emailKeySaved
      , "tca-spades"
      , gameresult.start
      , gameresult
    );

    // Optimistically update lifted app
    setGameResults([
      ...gameresults
      , gameresult
    ]);
  };


  return (
    <div className="App">

      <h1>Spades Companion App</h1>
      <hr />
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
				<Form.Control 
					type="text" 
					placeholder="Enter Email"
					value={emailKeyInput} 
					onChange={(e) => setEmailKeyInput(e.target.value)}
				/>
        <br />
				<Button
					onClick={saveEmailKey}
				>
					Save
				</Button>
		</Form.Group>
      <HashRouter>
        <Routes>
          <Route
            path="/" 
            element={<Homepage
              gameresults={gameresults}/>}
          />
          <Route path="/Setup"
            element={<Setup 
              setSetupInfo={setSetupInfo}/>} 
          />
          <Route path="/GameInPlay" 
            element={<GameInPlay 
              setupInfo={setupInfo}
              setGameResults={setGameResults}
              gameresults={gameresults}
              addGameresult={addGameresult}/>} 
          />
        </Routes>
      </HashRouter>
    </div>
   
  );
};

export default App;
