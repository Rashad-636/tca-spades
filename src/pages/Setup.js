import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "react-bootstrap";

export const Setup = ({setSetupInfo}) => {

    const nav = useNavigate();

    // useState variables and functions
    const [playerOne, setPlayerOne] = useState("");
    const [playerTwo, setPlayerTwo] = useState("");
    const [playerThree, setPlayerThree] = useState("");
    const [playerFour, setPlayerFour] = useState("");



    const play = () => {

      if (playerOne.length <= 3 ||
          playerTwo.length <=  3 ||
          playerThree.length <=  3 ||
          playerFour.length <=  3)
          
        return
      
      setSetupInfo({
        start: new Date().toISOString()
        , playerOne: playerOne
        , playerTwo: playerTwo
        , playerThree: playerThree
        , playerFour: playerFour
      });

      nav("/GameInPlay");

    };

    console.log(playerOne);
    console.log(playerTwo);
    console.log(playerThree);
    console.log(playerFour);


    return (
    <>
    <h2>Pick Your Team</h2>
      <label className="mb-3" style={{color: 'blue'}}>Team One</label>
      <br />
      
      <input 
        placeholder="Player One"
        value={playerOne
        }
        onChange={(e) => setPlayerOne(e.target.value)}
      />
      <br/>
      <br/>

      <input 
        placeholder="Player Two"
        value={playerTwo
        }
        onChange={(e) => setPlayerTwo(e.target.value)}
      />
      <br/>
      <br/>

    <label className="mb-3"  style={{color: 'red'}}>Team Two</label>
      <br />

      <input 
        placeholder="Player Three"
        value={playerThree
        }
        onChange={(e) => setPlayerThree(e.target.value)}
      />
      <br/>
      <br/>

      <input 
        placeholder="Player Four"
        value={playerFour
        }
        onChange={(e) => setPlayerFour(e.target.value)}
      />
      <br/>
      <br/>
      <Button
        variant="outline-primary"
        onClick={play}
      >
        Play!
      </Button>
    </>
    );
};