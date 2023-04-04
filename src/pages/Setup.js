import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Setup = () => {

    const nav = useNavigate();

    // useState variables and functions
    const [playerOne, setPlayerOne] = useState("");
    const [playerTwo, setPlayerTwo] = useState("");
    const [playerThree, setPlayerThree] = useState("");
    const [playerFour, setPlayerFour] = useState("");


    const [teamOne, setTeamOne] = useState({playerOne: "", playerTwo: ""});
    const [teamTwo, setTeamTwo] = useState({playerOne: "", playerTwo: ""});

    const setTeams = () => {

      setTeamOne(
        {
          playerOne,
          playerTwo
        }
      );

      setTeamTwo(
        {
          playerOne: playerThree,
          playerTwo: playerFour
        }
      );
    };

    const play = () => {
      console.log("here", teamOne, teamTwo);
      nav("/GameInPlay");
      setTeams();
    };

    console.log(playerOne);
    console.log(playerTwo);
    console.log(playerThree);
    console.log(playerFour);
    console.log(teamOne);
    console.log(teamTwo);

    return (
    <>
    <h2>Pick Your Team</h2>
      <label>Team One</label>
      <br />
      Player One: 
      <input 
        placeholder="Player One"
        value={playerOne
        }
        onChange={(e) => setPlayerOne(e.target.value)}
      />
      <br/>
      <br/>
      Player Two: 
      <input 
        placeholder="Player Two"
        value={playerTwo
        }
        onChange={(e) => setPlayerTwo(e.target.value)}
      />
      <br/>
      <br/>

    <label>Team Two</label>
      <br />
      Player Three: 
      <input 
        placeholder="Player Three"
        value={playerThree
        }
        onChange={(e) => setPlayerThree(e.target.value)}
      />
      <br/>
      <br/>
      Player Four: 
      <input 
        placeholder="Player Four"
        value={playerFour
        }
        onChange={(e) => setPlayerFour(e.target.value)}
      />
      <br/>
      <br/>
      <button
        onClick={play}
      >
        Play!
      </button>
      <button
        onClick={() => setTeams()}
      > 
      Set Team
      </button>
    </>
    );
};